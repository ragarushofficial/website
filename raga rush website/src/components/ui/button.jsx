import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:opacity-90 shadow-glow',
        outline: 'border border-primary/50 bg-transparent text-primary hover:bg-primary/10',
        ghost: 'text-foreground hover:bg-white/5',
      },
      size: {
        default: 'h-10 px-4 py-2',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Component = asChild ? 'span' : 'button'
  return <Component className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
