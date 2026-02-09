import React, { useEffect, useRef } from "react";

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

/**
 * 4-layer parallax with a subtle 3D feel.
 * - Mouse: updates --mx/--my in [-1..1]
 * - Scroll: updates --sy in [0..1]
 * Respects prefers-reduced-motion.
 */
export default function Parallax3D() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduced) return;

    let raf = 0;
    let targetMX = 0,
      targetMY = 0,
      mx = 0,
      my = 0,
      sy = 0;

    const onMouse = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      targetMX = clamp((e.clientX / w) * 2 - 1, -1, 1);
      targetMY = clamp((e.clientY / h) * 2 - 1, -1, 1);
    };

    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      sy = clamp(window.scrollY / max, 0, 1);
    };

    const tick = () => {
      // smooth
      mx += (targetMX - mx) * 0.06;
      my += (targetMY - my) * 0.06;

      root.style.setProperty("--mx", mx.toFixed(4));
      root.style.setProperty("--my", my.toFixed(4));
      root.style.setProperty("--sy", sy.toFixed(4));

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="parallax" aria-hidden="true">
      <div className="parallax__layer layer--far">
        <span className="shape glow" style={{ ["--dx" as any]: "12vw", ["--dy" as any]: "10vh", ["--z" as any]: "-240px", ["--s" as any]: 0.05 }} />
        <span className="shape ring" style={{ ["--dx" as any]: "72vw", ["--dy" as any]: "18vh", ["--z" as any]: "-260px", ["--s" as any]: 0.06 }} />
        <span className="shape dots" style={{ ["--dx" as any]: "55vw", ["--dy" as any]: "64vh", ["--z" as any]: "-220px", ["--s" as any]: 0.05 }} />
        <div className="grid" />
      </div>

      <div className="parallax__layer layer--mid">
        <span className="shape cloud" style={{ ["--dx" as any]: "8vw", ["--dy" as any]: "58vh", ["--z" as any]: "-160px", ["--s" as any]: 0.12 }} />
        <span className="shape cloud" style={{ ["--dx" as any]: "70vw", ["--dy" as any]: "46vh", ["--z" as any]: "-170px", ["--s" as any]: 0.11 }} />
        <span className="shape shard" style={{ ["--dx" as any]: "32vw", ["--dy" as any]: "22vh", ["--z" as any]: "-140px", ["--s" as any]: 0.12 }} />
      </div>

      <div className="parallax__layer layer--near">
        <span className="shape node" style={{ ["--dx" as any]: "20vw", ["--dy" as any]: "28vh", ["--z" as any]: "-80px", ["--s" as any]: 0.22 }} />
        <span className="shape node" style={{ ["--dx" as any]: "78vw", ["--dy" as any]: "30vh", ["--z" as any]: "-70px", ["--s" as any]: 0.23 }} />
        <span className="shape node" style={{ ["--dx" as any]: "60vw", ["--dy" as any]: "76vh", ["--z" as any]: "-70px", ["--s" as any]: 0.20 }} />
      </div>

      <div className="parallax__layer layer--front">
        <div className="cube" style={{ ["--dx" as any]: "84vw", ["--dy" as any]: "78vh", ["--z" as any]: "-10px", ["--s" as any]: 0.28 }}>
          <div className="cube__face f1" />
          <div className="cube__face f2" />
          <div className="cube__face f3" />
          <div className="cube__face f4" />
          <div className="cube__face f5" />
          <div className="cube__face f6" />
        </div>
        <div className="vignette" />
      </div>
    </div>
  );
}
