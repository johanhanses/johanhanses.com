import { data } from 'react-router'
// import { createUser } from '~/auth.server'
// import type { Route } from './+types/register'

// export async function action({ request }: Route.ActionArgs) {
//   if (request.method !== 'POST') {
//     return data({ error: 'Method not allowed' }, { status: 405 })
//   }

//   try {
//     const { username, password } = await request.json()

//     if (!username || !password) {
//       return data({ error: 'Username and password are required' }, { status: 400 })
//     }

//     const userId = await createUser(username, password)

//     return data(
//       {
//         id: userId,
//         message: 'User created successfully',
//       },
//       { status: 201 },
//     )
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     if (error.message === 'Username already exists') {
//       return data({ error: 'Username already exists' }, { status: 400 })
//     }

//     // eslint-disable-next-line no-console
//     console.error('User creation error:', error)
//     return data({ error: 'Failed to create user' }, { status: 500 })
//   }
// }

export async function action() {
  return data({ message: 'Hello, slang!' })
}
