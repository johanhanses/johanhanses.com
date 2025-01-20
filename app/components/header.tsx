import { Form, NavLink } from 'react-router'
import { Terminal } from './terminal'
import { ThemeToggler } from './theme-toggler'

export function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <header className="mx-auto max-w-screen-md px-6 text-lg lg:px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Terminal className="h-5 w-5" />

          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-lightPrimary text-lightPrimary dark:border-darkPrimary dark:text-darkPrimary'
                  : 'hover:text-lightPrimary dark:hover:text-darkPrimary'
              }
            >
              Home
            </NavLink>

            {isLoggedIn ? (
              <>
                <NavLink
                  to="/cover-letter"
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 border-lightPrimary text-lightPrimary dark:border-darkPrimary dark:text-darkPrimary'
                      : 'hover:text-lightPrimary dark:hover:text-darkPrimary'
                  }
                >
                  Cover Letter
                </NavLink>

                <NavLink
                  to="/cv"
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 border-lightPrimary text-lightPrimary dark:border-darkPrimary dark:text-darkPrimary'
                      : 'hover:text-lightPrimary dark:hover:text-darkPrimary'
                  }
                >
                  CV
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-lightPrimary text-lightPrimary dark:border-darkPrimary dark:text-darkPrimary'
                    : 'hover:text-lightPrimary dark:hover:text-darkPrimary'
                }
              >
                Login
              </NavLink>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn && (
            <Form action="/logout" method="post">
              <button type="submit" className="hover:text-lightPrimary dark:hover:text-darkPrimary">
                Logout
              </button>
            </Form>
          )}
          <ThemeToggler />
        </div>
      </div>
    </header>
  )
}
