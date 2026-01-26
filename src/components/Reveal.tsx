import React from 'react'
import { motion, useInView } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  y = 18
}: {
  children: React.ReactNode
  delay?: number
  y?: number
}) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { margin: '-12% 0px -10% 0px', once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
