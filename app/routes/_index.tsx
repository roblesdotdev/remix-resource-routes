import type { V2_MetaFunction } from '@remix-run/node'
import Search from '~/routes/resources.jobs'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix Rocks' },
    { name: 'description', content: 'Remix resource routes example' },
  ]
}

export default function Index() {
  return (
    <div className="flex h-screen flex-col items-center bg-[#121816] py-32 text-[#fafafa]">
      <h1 className="text-2xl font-bold">Search Jobs</h1>
      <Search />
    </div>
  )
}
