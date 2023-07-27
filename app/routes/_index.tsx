import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getJobs } from '~/utils/jobs.server'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix Rocks' },
    { name: 'description', content: 'Remix resource routes example' },
  ]
}

type LoaderData = {
  jobs: Awaited<ReturnType<typeof getJobs>>
}

export const loader: LoaderFunction = async () => {
  const jobs = await getJobs()
  return json<LoaderData>({
    jobs,
  })
}

export default function Index() {
  const { jobs } = useLoaderData<LoaderData>()
  return (
    <div className="flex flex-col items-center py-32">
      <h1 className="text-2xl font-bold">Working</h1>
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </div>
  )
}
