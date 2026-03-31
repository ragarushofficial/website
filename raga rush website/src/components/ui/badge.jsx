import { cn } from '@/lib/utils'

function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/70 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent',
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
