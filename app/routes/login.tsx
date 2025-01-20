import { motion } from 'framer-motion'
import { data, Form, redirect, useSearchParams } from 'react-router'
import { verifyLogin } from '~/auth.server'
import { createUserSession, getUserId } from '~/session.server'
import type { Route } from './+types/login'
import { fadeIn, fadeInUp } from './home'

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await getUserId(request)
  if (userId) return redirect('/')

  return null
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const username = formData.get('username')
  const password = formData.get('password')
  const redirectTo = formData.get('redirectTo')

  if (typeof username !== 'string' || typeof password !== 'string' || typeof redirectTo !== 'string') {
    return data({ errors: { form: 'Invalid form data' } }, { status: 400 })
  }

  try {
    const user = await verifyLogin(username, password)
    if (!user) {
      return data({ errors: { form: 'Invalid username or password' } }, { status: 400 })
    }

    return createUserSession(user.id.toString(), redirectTo)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Login error:', error)
    return data({ errors: { form: 'An error occurred during login' } }, { status: 500 })
  }
}

export default function LoginPage({ actionData }: Route.ComponentProps) {
  const [searchParams] = useSearchParams()
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm space-y-8">
        <motion.h1 className="mt-6 text-2xl font-bold" {...fadeInUp}>
          Login
        </motion.h1>

        <Form method="post" className="mt-8 space-y-6">
          <input type="hidden" name="redirectTo" value={searchParams.get('redirectTo') || '/cover-letter'} />

          <motion.div className="space-y-4 rounded-md shadow-sm" {...fadeIn}>
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-[#4c4f69] focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-[#4c4f69] focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </motion.div>

          {actionData?.errors?.form && <div className="text-red-500">{actionData.errors.form}</div>}

          <motion.div {...fadeInUp}>
            <button
              type="submit"
              className="group relative flex justify-center rounded-md border border-transparent bg-lightPrimary px-4 py-1.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-darkPrimary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-darkPrimary dark:hover:bg-lightPrimary"
            >
              Sign in
            </button>
          </motion.div>
        </Form>
      </div>
    </div>
  )
}
