import { json, type LoaderFunction } from '@remix-run/node'
import { useFetcher } from '@remix-run/react'
import { useEffect, useMemo, useState } from 'react'
import invariant from 'tiny-invariant'
import { useDebounce } from '~/hooks/useDebounce'
import { searchJobs } from '~/utils/jobs.server'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '~/components/ui/command'

type Items = Awaited<ReturnType<typeof searchJobs>>

type Item = NonNullable<Items>[0]

type LoaderData = {
  items: Items
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  invariant(typeof query === 'string', 'query is required')
  const items = await searchJobs(query)

  return json<LoaderData>(
    {
      items,
    },
    {
      headers: { 'Cache-Control': 'max-age=60' },
    },
  )
}

export default function Search({
  onSelect,
}: {
  onSelect: (id: string) => void
}) {
  const fetcher = useFetcher()
  const [query, setQuery] = useState('')
  const debounceQuery = useDebounce(query, 300)
  const isLoading = fetcher.state !== 'idle'
  const items = useMemo<Item[]>(() => {
    return fetcher.data?.items
  }, [fetcher.data])
  const isOpen = debounceQuery.length > 0

  useEffect(() => {
    fetcher.load(`/resources/jobs?query=${debounceQuery}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceQuery])

  return (
    <div className="mx-auto w-full max-w-xl">
      <Command shouldFilter={false}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search by title, skill or location..."
          loading={isLoading}
        />
        {isOpen ? (
          <CommandList>
            <CommandEmpty>
              {isLoading
                ? 'Loading...'
                : `No results were found for '${query}'.`}
            </CommandEmpty>
            {!isLoading && items?.length > 0 ? (
              <CommandGroup>
                {items.map(item => (
                  <CommandItem
                    className="py-2"
                    key={item.slug}
                    onSelect={() => onSelect(item.slug)}
                  >
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : null}
          </CommandList>
        ) : null}
      </Command>
    </div>
  )
}
