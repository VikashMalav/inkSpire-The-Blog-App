import React from 'react'

const Button = ({
    children,
    type='button',
    className='',
    bgColor='bg-blue-600',
    textColor='text-white',
    ...props
}) => {
  return (
    <button className={`px-2 py-2 rounded-lg ${bgColor} ${textColor}${className}`} {...props}>{children}
    </button>
  )
}

export default Button