import type { V2_MetaFunction } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import { GithubIcon } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import Search from '~/routes/resources.jobs'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix Rocks' },
    { name: 'description', content: 'Remix resource routes example' },
  ]
}

export default function Index() {
  const navigate = useNavigate()

  const handleSelect = (slug: string) => {
    navigate(`/jobs/${slug}`)
  }

  return (
    <div className="mx-auto flex h-screen max-w-xl flex-col gap-2 px-4 py-24">
      <a
        href="https://github.com/roblesdotdev/remix-resource-routes"
        target="_blank"
        rel="noreferrer"
        className="self-start"
      >
        <Badge className="flex items-center gap-2">
          <GithubIcon className="h-3 w-3" />
          <span className="font-normal">Source Code</span>
        </Badge>
      </a>
      <p className="mb-6 text-fg-muted sm:text-lg">
        Simple search autocomplete created with Remix Resource Routes, Tailwind
        CSS, Prisma, Shadcn UI, and cmdk.
      </p>
      <Search onSelect={handleSelect} />
    </div>
  )
}
