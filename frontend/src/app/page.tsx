import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to Todo App
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          A simple todo application for testing Dokploy deployment features
        </p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/todos"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Todos
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              📋 Manage Tasks
            </h3>
            <p className="text-gray-600">
              Create, update, and organize your todo items with an intuitive interface.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 Dokploy Ready
            </h3>
            <p className="text-gray-600">
              Configured for seamless deployment and preview environments with Dokploy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ⚡ Modern Stack
            </h3>
            <p className="text-gray-600">
              Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Test Deployment Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Auto Deploy
            </h3>
            <p className="text-gray-600 mb-4">
              Push changes to the repository and watch them automatically deploy to production.
            </p>
            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
              git push origin test-1
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Preview Deployments
            </h3>
            <p className="text-gray-600 mb-4">
              Create pull requests to test changes in isolated preview environments.
            </p>
            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
              git checkout -b feature-branch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}