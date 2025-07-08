import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

const Badge = forwardRef(({ 
  className, 
  variant = 'default', 
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-primary text-white',
    secondary: 'bg-accent text-primary',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    error: 'bg-error text-white'
  }

  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  )
})

Badge.displayName = 'Badge'

export default Badge