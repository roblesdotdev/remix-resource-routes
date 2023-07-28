import { useFetcher } from '@remix-run/react'
import { useEffect, useMemo, useState } from 'react'
import { useDebounce } from '~/hooks/useDebounce'
import type { searchJobs } from '~/utils/jobs.server'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '~/components/ui/command'

type Item = Awaited<ReturnType<typeof searchJobs>>[0]

export default function Search() {
  const fetcher = useFetcher()
  const [query, setQuery] = useState('')
  const debounceQuery = useDebounce(query, 300)
  const isLoading = fetcher.state === 'loading'
  const items = useMemo<Item[]>(() => {
    return fetcher.data?.items || []
  }, [fetcher.data])
  const hasQuery = debounceQuery.length > 0 && !isLoading

  useEffect(() => {
    fetcher.load(`/resources/jobs?query=${query}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceQuery])

  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <Command shouldFilter={false} className="mt-12">
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search by title, skill or location..."
          loading={isLoading}
        />
        {hasQuery && (
          <CommandList>
            <CommandEmpty>No results were found for '{query}'.</CommandEmpty>
            <CommandGroup>
              {items.map(item => (
                <CommandItem className="py-2" key={item.slug}>
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  )
}
