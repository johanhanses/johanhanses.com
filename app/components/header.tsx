import { NavLink } from 'react-router'

export function Header() {
  return (
    <header className="max-w-screen-md mx-auto">
      <div className="flex justify-between items-center h-16 text-lg">
        <nav className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-primary border-primary border-b-2' : 'hover:text-primary')}
          >
            Home
          </NavLink>
          <NavLink
            to="/protected"
            className={({ isActive }) => (isActive ? 'text-primary border-primary border-b-2' : 'hover:text-primary')}
          >
            Protected Page
          </NavLink>
        </nav>

        {/* <Form action="/logout" method="post">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </Form> */}
      </div>
    </header>
  )
}
