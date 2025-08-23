export default function AboutPage() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About This App</h1>
        
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Todo App for Dokploy Testing
          </h2>
          <p className="text-gray-600 mb-6">
            This is a simple todo application specifically designed to test Dokploy's 
            deployment and preview features. It demonstrates a full-stack application 
            with modern technologies and best practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend Stack</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Next.js 15 (App Router)</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• React Hooks</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend Stack</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Express.js</li>
                <li>• Node.js 20+</li>
                <li>• RESTful API</li>
                <li>• CORS & Security</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Dokploy Features Tested
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🚀 Auto Deploy
              </h3>
              <p className="text-gray-600 mb-4">
                Automatically deploys changes when pushed to the main branch. 
                Perfect for continuous deployment workflows.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">How to test:</p>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Make changes to the code</li>
                  <li>2. Commit and push to your repository</li>
                  <li>3. Watch Dokploy automatically deploy</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🔍 Preview Deployments
              </h3>
              <p className="text-gray-600 mb-4">
                Creates isolated preview environments for pull requests, 
                allowing you to test changes before merging.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">How to test:</p>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Create a new branch with changes</li>
                  <li>2. Open a pull request</li>
                  <li>3. View the preview deployment link</li>
                  <li>4. Test your changes in isolation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            API Endpoints
          </h2>
          <p className="text-gray-600 mb-6">
            The backend provides a complete REST API for todo management:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                GET /api/todos
              </code>
              <p className="text-sm text-gray-600 mt-1">Get all todos</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                POST /api/todos
              </code>
              <p className="text-sm text-gray-600 mt-1">Create a new todo</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                PUT /api/todos/:id
              </code>
              <p className="text-sm text-gray-600 mt-1">Update a todo</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                DELETE /api/todos/:id
              </code>
              <p className="text-sm text-gray-600 mt-1">Delete a todo</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                GET /health
              </code>
              <p className="text-sm text-gray-600 mt-1">Health check endpoint</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Project Structure
          </h2>
          <p className="text-gray-600 mb-6">
            This project uses a monorepo structure with both frontend and backend 
            in the same repository, which is ideal for Dokploy deployment.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`todo-app/
├── backend/
│   ├── server.js          # Express.js server
│   ├── package.json       # Backend dependencies
│   └── env.template       # Environment variables template
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── page.tsx          # Home page
│   │       ├── todos/page.tsx    # Todos page
│   │       ├── about/page.tsx    # About page
│   │       └── layout.tsx        # Root layout
│   └── package.json       # Frontend dependencies
└── package.json           # Root workspace config`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
