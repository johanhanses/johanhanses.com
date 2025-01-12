import { Form, Link } from 'react-router'

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/protected" className="text-gray-700 hover:text-gray-900">
              Protected Page
            </Link>
          </nav>

          <Form action="/logout" method="post">
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          </Form>
        </div>
      </div>
    </header>
  )
}
