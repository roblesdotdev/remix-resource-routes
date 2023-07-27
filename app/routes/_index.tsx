import type { V2_MetaFunction } from '@remix-run/node'
import Autocomplete from '~/components/autocomplete'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix Rocks' },
    { name: 'description', content: 'Remix resource routes example' },
  ]
}

export default function Index() {
  return (
    <div className="flex flex-col items-center py-32">
      <h1 className="text-2xl font-bold">Search Jobs</h1>
      <Autocomplete />
    </div>
  )
}
