import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

const Label = forwardRef(({ 
  className, 
  ...props 
}, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium text-gray-700 mb-2 block',
        className
      )}
      {...props}
    />
  )
})

Label.displayName = 'Label'

export default Label