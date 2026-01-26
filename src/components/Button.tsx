import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  glow?: boolean
}

export function Button({ variant = 'primary', glow = true, className = '', ...props }: Props) {
  const v = variant === 'primary' ? 'btn btn-primary' : 'btn btn-ghost'
  const g = glow ? 'glow' : ''
  return <button className={`${v} ${g} ${className}`} {...props} />
}
