import { json, type LoaderFunction } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { ChevronLeftIcon, MapPinIcon } from 'lucide-react'
import invariant from 'tiny-invariant'
import Skeleton from '~/components/skeleton'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { getJobBySlug } from '~/utils/jobs.server'

type LoaderData = {
  job: NonNullable<Awaited<ReturnType<typeof getJobBySlug>>>
}

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug
  invariant(typeof slug === 'string', 'Slug is required')
  const job = await getJobBySlug(slug)

  if (!job) {
    throw new Response(null, {
      status: 404,
      statusText: 'Job Not Found',
    })
  }

  return json<LoaderData>({
    job,
  })
}

export default function JobDetail() {
  const navigate = useNavigate()
  const { job } = useLoaderData<LoaderData>()

  return (
    <div className="mx-auto flex h-screen max-w-xl flex-col gap-2 px-4 py-16">
      <Button className="self-start pl-2" onClick={() => navigate(-1)}>
        <div className="flex items-center gap-2">
          <ChevronLeftIcon className="h-4 w-4" />
          <span>Back</span>
        </div>
      </Button>
      <div className="py-8">
        <header className="flex flex-col gap-1 text-fg-muted">
          <Badge className="self-start">{job.category}</Badge>
          <h1 className="text-2xl font-bold text-fg">{job.title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <MapPinIcon className="h-4 w-4" />
            <span>{job.location}</span>
            <span>-</span>
            <span>{job.remote ? 'Remote' : 'Presential'}</span>
          </div>
          <p>{job.description}</p>
        </header>
        <div className="py-6">
          <ul className="flex flex-wrap items-center gap-2">
            {job.tags.map(tag => (
              <Badge
                key={tag.id}
                variant="outline"
                className="whitespace-nowrap"
              >
                {tag.name}
              </Badge>
            ))}
          </ul>
        </div>
        <Skeleton />
      </div>
    </div>
  )
}
