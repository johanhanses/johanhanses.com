import { data, Form, redirect, useSearchParams } from 'react-router'
import { verifyLogin } from '~/auth.server'
import { createUserSession, getUserId } from '~/session.server'
import type { Route } from './+types/login'

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
    console.log("redirectTo", redirectTo);

    return createUserSession(user.id.toString(), redirectTo)
  } catch (error) {
    console.error('Login error:', error)
    return data({ errors: { form: 'An error occurred during login' } }, { status: 500 })
  }
}

export default function LoginPage({ actionData }: Route.ComponentProps) {
  const [searchParams] = useSearchParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>

        <Form method="post" className="mt-8 space-y-6">
          <input type="hidden" name="redirectTo" value={searchParams.get('redirectTo') || '/'} />

          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {actionData?.errors?.form && <div className="text-red-500">{actionData.errors.form}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}
