require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage for todos (for testing purposes)
let todos = [
  {
    id: 1,
    title: 'Learn Dokploy',
    description: 'Understand how to deploy apps with Dokploy',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Test Auto Deploy',
    description: 'Test automatic deployment feature',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Test Preview Deployments',
    description: 'Test preview deployment functionality',
    completed: true,
    createdAt: new Date().toISOString()
  }
];

let nextId = 4;

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json({
    success: true,
    data: todos,
    count: todos.length
  });
});

// Get todo by ID
app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  
  res.json({
    success: true,
    data: todo
  });
});

// Create new todo
app.post('/api/todos', (req, res) => {
  const { title, description } = req.body;
  
  if (!title) {
    return res.status(400).json({
      success: false,
      error: 'Title is required'
    });
  }
  
  const newTodo = {
    id: nextId++,
    title,
    description: description || '',
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  todos.push(newTodo);
  
  res.status(201).json({
    success: true,
    data: newTodo
  });
});

// Update todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  
  const { title, description, completed } = req.body;
  
  todos[todoIndex] = {
    ...todos[todoIndex],
    title: title !== undefined ? title : todos[todoIndex].title,
    description: description !== undefined ? description : todos[todoIndex].description,
    completed: completed !== undefined ? completed : todos[todoIndex].completed,
    updatedAt: new Date().toISOString()
  };
  
  res.json({
    success: true,
    data: todos[todoIndex]
  });
});

// Delete todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  
  res.json({
    success: true,
    data: deletedTodo
  });
});

// Get completed todos
app.get('/api/todos/status/completed', (req, res) => {
  const completedTodos = todos.filter(todo => todo.completed);
  res.json({
    success: true,
    data: completedTodos,
    count: completedTodos.length
  });
});

// Get pending todos
app.get('/api/todos/status/pending', (req, res) => {
  const pendingTodos = todos.filter(todo => !todo.completed);
  res.json({
    success: true,
    data: pendingTodos,
    count: pendingTodos.length
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📋 API endpoints available at http://localhost:${PORT}/api/todos`);
  console.log(`🏥 Health check at http://localhost:${PORT}/health`);
});

module.exports = app;
