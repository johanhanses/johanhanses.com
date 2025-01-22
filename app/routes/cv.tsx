import { getCv } from '~/cv.server'
import { requireUserId } from '~/session.server'
import type { Route } from './+types/cv'

export async function loader({ request }: Route.LoaderArgs) {
  await requireUserId(request)
  const cv = await getCv()
  return { cv }
}

export default function CVPage({ loaderData }: Route.ComponentProps) {
  const { cv } = loaderData

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 font-serif text-2xl">CV</h1>
      <div className="">{cv ? JSON.stringify(cv.content, null, 2) : <p>No CV found</p>}</div>
    </div>
  )
}
