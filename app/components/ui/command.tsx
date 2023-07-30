'use client'

import * as React from 'react'
import { Command as CommandPrimitive, useCommandState } from 'cmdk'
import clsx from 'clsx'
import { Loader2Icon, SearchIcon } from 'lucide-react'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={clsx(
      'flex w-full flex-col overflow-hidden rounded-md bg-black text-white',
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    loading: boolean
  }
>(({ className, loading, ...props }, ref) => (
  <div className="flex items-center" cmdk-input-wrapper="">
    <CommandPrimitive.Input
      ref={ref}
      className={clsx(
        'flex w-full rounded-md bg-transparent py-4 pl-4 pr-2 text-lg outline-none placeholder:text-white/50 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
    {loading ? (
      <Loader2Icon className="mr-4 h-5 w-5 animate-spin opacity-50" />
    ) : (
      <SearchIcon className="mr-4 h-5 w-5 shrink-0 opacity-50" />
    )}
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={clsx(
      'cmdk-scroll max-h-[300px] overflow-y-auto overflow-x-hidden border-t-2 border-white/10',
      className,
    )}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => {
  const render = useCommandState(state => state.filtered.count === 0)
  if (!render) return null
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm text-white/50"
      {...props}
    />
  )
})

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandLoading = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Loading> & {
    children: React.ReactNode
  }
>(({ children, ...props }, ref) => (
  <CommandPrimitive.Loading ref={ref} {...props}>
    <div className="py-6 text-center text-sm text-white/50">{children}</div>
  </CommandPrimitive.Loading>
))

CommandLoading.displayName = CommandPrimitive.Loading.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={clsx(
      'overflow-hidden p-1 text-white/70 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-white/70',
      className,
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={clsx('-mx-1 h-px bg-white/10', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={clsx(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-3 outline-none aria-selected:bg-white/10 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={clsx(
        'ml-auto text-xs tracking-widest text-white/30',
        className,
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandLoading,
  CommandShortcut,
  CommandSeparator,
}
