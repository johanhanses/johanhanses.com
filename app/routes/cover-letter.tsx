import { getCoverLetters } from '~/cover-letter.server'
import { getUsername, requireUserId } from '~/session.server'
import type { Route } from './+types/cover-letter'

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await requireUserId(request)
  const userName = await getUsername(request)
  const coverLetter = await getCoverLetters(parseInt(userId))
  return { coverLetter, userName }
}

export default function CoverLetterPage({ loaderData }: Route.ComponentProps) {
  const { coverLetter, userName } = loaderData

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 font-serif text-2xl">Cover Letter for {userName}</h1>

      <div className="">
        {coverLetter.length > 0 ? (
          <ul>
            {coverLetter.map((coverLetter) => (
              <li key={coverLetter.id} className="mb-4">
                <h2 className="text-xl">{coverLetter.title}</h2>
                <p>{coverLetter.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cover letters found</p>
        )}
      </div>
    </div>
  )
}
