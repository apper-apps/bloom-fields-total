import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

const Input = forwardRef(({ 
  className, 
  type = 'text', 
  ...props 
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'input-field',
        className
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input