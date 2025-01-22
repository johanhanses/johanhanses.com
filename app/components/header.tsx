import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Form, NavLink, useNavigation } from 'react-router'
import { Hamburger } from './hamburger'
import { Terminal } from './terminal'
import { ThemeToggler } from './theme-toggler'

export function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isNavigating = useNavigation().state !== 'idle'

  useEffect(() => {
    if (isMenuOpen && isNavigating) {
      setIsMenuOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavigating])

  return (
    <header className="mx-auto max-w-screen-md px-6 text-lg lg:px-4">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Terminal className="h-5 w-5" />

          <button
            className="flex h-8 w-8 items-center justify-center rounded-md transition-all hover:bg-[#ccd0da] dark:hover:bg-[#414559] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Hamburger className="h-6 w-6 md:hidden" />
          </button>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-16 z-50 w-full rounded-md border border-darkPrimary bg-[#eff1f5] p-4 text-base shadow-sm dark:bg-[#24273a] md:hidden"
              >
                <nav className="flex flex-col gap-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'text-lightPrimary dark:text-darkPrimary' : '')}
                  >
                    Home
                  </NavLink>

                  {isLoggedIn ? (
                    <>
                      <NavLink
                        to="/cover-letter"
                        className={({ isActive }) => (isActive ? 'text-lightPrimary dark:text-darkPrimary' : '')}
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
                      className={({ isActive }) => (isActive ? 'text-lightPrimary dark:text-darkPrimary' : '')}
                    >
                      Login
                    </NavLink>
                  )}

                  {isLoggedIn && (
                    <Form action="/logout" method="post">
                      <button type="submit" className="hover:text-lightPrimary dark:hover:text-darkPrimary">
                        Logout
                      </button>
                    </Form>
                  )}
                </nav>
              </motion.nav>
            ) : null}
          </AnimatePresence>

          <nav className="hidden space-x-4 md:flex">
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
            <Form action="/logout" method="post" className="hidden md:flex">
              <button type="submit" className="text-sm hover:text-lightPrimary dark:hover:text-darkPrimary md:text-lg">
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
