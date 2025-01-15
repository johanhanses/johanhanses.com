import { NavLink } from 'react-router'
import { Terminal } from './terminal'
import { ThemeToggler } from './theme-toggler'

export function Header() {
  return (
    <header className="max-w-screen-md mx-auto px-6 lg:px-4 text-lg">
      <div className="flex items-center h-16 justify-between">
        <div className="flex items-center gap-6">
          <Terminal className="w-5 h-5" />

          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-lightPrimary dark:text-darkPrimary border-lightPrimary dark:border-darkPrimary border-b-2'
                  : 'hover:text-lightPrimary dark:hover:text-darkPrimary'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/protected"
              className={({ isActive }) =>
                isActive
                  ? 'text-lightPrimary dark:text-darkPrimary border-lightPrimary dark:border-darkPrimary border-b-2'
                  : 'hover:text-lightPrimary dark:hover:text-darkPrimary'
              }
            >
              Protected Page
            </NavLink>
          </nav>
        </div>

        <div>
          {/* <Form action="/logout" method="post">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </Form> */}
          <ThemeToggler />
        </div>
      </div>
    </header>
  )
}
