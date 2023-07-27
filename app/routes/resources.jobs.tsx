import { json, type LoaderFunction } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { searchJobs } from '~/utils/jobs.server'

type LoaderData = {
  items: Awaited<ReturnType<typeof searchJobs>>
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  invariant(typeof query === 'string', 'query is required')
  return json<LoaderData>(
    {
      items: await searchJobs(query),
    },
    {
      headers: { 'Cache-Control': 'max-age=60' },
    },
  )
}
