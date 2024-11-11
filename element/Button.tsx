import React from 'react'
import cn from 'classnames'

const Button = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <button className={cn("bg-primary text-white flex justify-center items-center rounded-[10px]", className)}>
      {children}
    </button>
  )
}

export default Button
