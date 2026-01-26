import React from 'react'

/**
 * Parallax 3D — 4 שכבות עומק:
 * - רחוק: זז הכי לאט
 * - בינוני: זז בינוני
 * - קרוב: זז מהר
 * - "Front": אלמנטים "קרובים למסך" עם תחושת עומק גבוהה
 *
 * התנועה מושפעת גם מעכבר וגם מגלילה.
 */
export function Parallax3D() {
  const wrapRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    let mx = 0, my = 0, sy = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1
      const h = window.innerHeight || 1
      mx = (e.clientX / w - 0.5) * 2
      my = (e.clientY / h - 0.5) * 2
      request()
    }

    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      sy = (window.scrollY / max) * 2 - 1
      request()
    }

    const request = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        el.style.setProperty('--mx', mx.toFixed(4))
        el.style.setProperty('--my', my.toFixed(4))
        el.style.setProperty('--sy', sy.toFixed(4))
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    request()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={wrapRef} className="parallax3d" aria-hidden="true">
      <div className="layer layer-far">
        <div className="cloud cloud-a" />
        <div className="cloud cloud-b" />
        <div className="haze" />
      </div>

      <div className="layer layer-mid">
        <div className="grid" />
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
      </div>

      <div className="layer layer-near">
        <div className="circuit circuit-a" />
        <div className="circuit circuit-b" />
        <div className="dotfield" />
      </div>

      <div className="layer layer-front">
        <div className="shard shard-a" />
        <div className="shard shard-b" />
        <div className="shard shard-c" />
      </div>

      <div className="vignette" />
    </div>
  )
}
