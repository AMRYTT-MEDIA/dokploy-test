# Todo App - Dokploy Test

A simple todo application built specifically for testing Dokploy's deployment and preview features. This project demonstrates a modern full-stack application using Next.js and Express.js in a monorepo structure.

## 🚀 Features

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Express.js REST API with Node.js 20+
- **Database**: In-memory storage (for testing purposes)
- **Deployment**: Docker containers with health checks
- **Dokploy Ready**: Configured for auto-deploy and preview deployments

## 📋 Pages

1. **Home Page** (`/`) - Welcome page with project overview
2. **Todos Page** (`/todos`) - Full todo management interface
3. **About Page** (`/about`) - Technical details and API documentation

## 🛠 Tech Stack

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks

### Backend
- Express.js
- Node.js 20+
- CORS & Security middleware
- RESTful API design

## 🏗 Project Structure

```
todo-app/
├── backend/                 # Express.js backend
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── Dockerfile          # Backend container config
│   └── env.template        # Environment variables template
├── frontend/               # Next.js frontend
│   ├── src/app/           # App router pages
│   ├── package.json       # Frontend dependencies
│   └── Dockerfile         # Frontend container config
├── docker-compose.yml     # Local development setup
├── dokploy.yml           # Dokploy configuration
└── package.json          # Workspace configuration
```

## 🚀 Quick Start

### Development

1. Install dependencies:
```bash
npm install
```

2. Start both frontend and backend:
```bash
npm run dev
```

3. Visit the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/todos
- Health check: http://localhost:5000/health

### Docker (Production)

1. Build and run with Docker Compose:
```bash
docker-compose up --build
```

2. Access the application at http://localhost:3000

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get todo by ID |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |
| GET | `/api/todos/status/completed` | Get completed todos |
| GET | `/api/todos/status/pending` | Get pending todos |

## 🔧 Dokploy Configuration

This project is pre-configured for Dokploy deployment:

### Auto Deploy
- Automatically deploys when pushing to the `test-1` branch
- Uses Docker containers for both frontend and backend
- Includes health checks for reliable deployments

### Preview Deployments
- Creates isolated environments for pull requests
- Automatically deletes preview environments after 7 days
- Perfect for testing changes before merging

### Configuration Files
- `dokploy.yml` - Main Dokploy configuration
- `docker-compose.yml` - Local development and testing
- Individual `Dockerfile` for each service

## 🧪 Testing Dokploy Features

### Auto Deploy Testing
1. Make changes to the code
2. Commit and push to the repository:
   ```bash
   git add .
   git commit -m "Test auto deploy"
   git push origin test-1
   ```
3. Watch Dokploy automatically deploy your changes

### Preview Deployment Testing
1. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
2. Make changes and push:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
3. Create a pull request
4. View the preview deployment link in the PR

## 🌱 Environment Variables

### Backend
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode
- `FRONTEND_URL` - Frontend URL for CORS

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `PORT` - Frontend port (default: 3000)

## 📝 Development Notes

- The backend uses in-memory storage for simplicity
- CORS is configured to allow frontend-backend communication
- Both services include health checks for container orchestration
- TypeScript and ESLint are configured but won't block builds

## 🤝 Repository Structure Best Practice

This project uses a **monorepo structure** which is recommended for Dokploy because:

1. **Simplified Deployment**: Both services in one repository
2. **Better Preview Deployments**: Dokploy can easily create previews for the entire stack
3. **Synchronized Development**: Frontend and backend changes stay in sync
4. **Easier Configuration**: Single configuration file for the entire application

## 📚 Next Steps

1. Connect to a real database (PostgreSQL, MongoDB, etc.)
2. Add authentication and user management
3. Implement real-time updates with WebSockets
4. Add comprehensive testing suite
5. Set up monitoring and logging

---

Built with ❤️ for testing Dokploy's awesome deployment features!
