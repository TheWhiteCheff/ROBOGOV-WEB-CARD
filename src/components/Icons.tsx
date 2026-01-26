import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & { variant?: 'sky' | 'bot' | 'shield' | 'spark' }

export function Mark({ variant = 'spark', ...p }: Props) {
  if (variant === 'bot') {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M9 3h6v3H9V3Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V9Z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9.2 12.1h.01M14.8 12.1h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M8 20v1M16 20v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  }
  if (variant === 'shield') {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path
          d="M12 2 20 6v7c0 5-3.3 8.6-8 9-4.7-.4-8-4-8-9V6l8-4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8 12.5 10.5 15 16.2 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (variant === 'sky') {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...p}>
        <path d="M4 14c1.2-2.7 3.5-4 6.5-4 2.7 0 4.8 1 6.2 3 1-.7 2.1-1 3.3-1 1.4 0 2.8.5 4 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 17h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M12 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 7 7.5 5.5M15 7l1.5-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 2l1.4 6.1L20 12l-6.6 3.9L12 22l-1.4-6.1L4 12l6.6-3.9L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  )
}
