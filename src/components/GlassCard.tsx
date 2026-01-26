import React, { useRef } from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tilt?: boolean
  pop?: boolean
}

export function GlassCard({ tilt = true, pop = true, className = '', ...props }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  function onMove(e: React.MouseEvent) {
    if (!tilt || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const rx = (0.5 - y) * 10
    const ry = (x - 0.5) * 10
    ref.current.style.setProperty('--rx', `${rx}deg`)
    ref.current.style.setProperty('--ry', `${ry}deg`)
    ref.current.style.setProperty('--mx', `${x}`)
    ref.current.style.setProperty('--my', `${y}`)
  }

  function onLeave() {
    if (!tilt || !ref.current) return
    ref.current.style.setProperty('--rx', `0deg`)
    ref.current.style.setProperty('--ry', `0deg`)
  }

  return (
    <div
      ref={ref}
      className={`glass-card ${pop ? 'pop' : ''} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    />
  )
}
