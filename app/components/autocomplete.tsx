import { useFetcher } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { useDebounce } from '~/hooks/useDebounce'
import type { searchJobs } from '~/utils/jobs.server'

type Item = Awaited<ReturnType<typeof searchJobs>>[0]

export default function Autocomplete() {
  const fetcher = useFetcher()
  const [query, setQuery] = useState('')
  const debounceQuery = useDebounce(query, 300)
  const items: Item[] = fetcher.data?.items ?? []
  const hasItems = query.length > 0 && items.length > 0

  useEffect(() => {
    fetcher.load(`/resources/jobs?query=${query}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceQuery])

  return (
    <div className="relative w-2/4">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full rounded border px-2 py-3"
        type="search"
      />
      {hasItems && (
        <div className="absolute w-full border bg-white">
          <ul className="px-2 py-3">
            {items.map(item => (
              <li className="border-b py-2 text-sm" key={item.slug}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
