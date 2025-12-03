"use client";
import React, { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    // ===== knobs =====
    const DENSITY = 0.00011; // ↑ for more nodes
    const BASE_SPEED = 0.55; // 0.4→0.55: slightly faster, still smooth
    const LINK_DIST = 180; // link radius (px)
    const NODE_COLOR = "#DEA584"; // rust
    const LINK_RGBA = "rgba(140,80,48,"; // copper alpha prefix
    // =================

    let w, h, dpr, N, raf;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth || window.innerWidth;
      h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // (re)seed based on area
      particles.length = 0;
      N = reduce ? 30 : Math.max(40, Math.round(w * h * DENSITY));
      for (let i = 0; i < N; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * BASE_SPEED,
          vy: (Math.random() - 0.5) * BASE_SPEED,
          r: Math.random() * 1.6 + 0.6,
        });
      }
    };

    // ensure CSS size → canvas size
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    window.addEventListener("resize", resize);
    resize();

    const L2 = LINK_DIST * LINK_DIST;

    function step() {
      ctx.clearRect(0, 0, w, h);

      // move + draw nodes
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12);
        g.addColorStop(0, NODE_COLOR);
        g.addColorStop(1, "rgba(222,165,132,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // links
      ctx.lineWidth = 0.6;
      for (let i = 0; i < N; i++) {
        const a = particles[i];
        for (let j = i + 1; j < N; j++) {
          const b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < L2) {
            const alpha = 0.35 * (1 - d2 / L2);
            ctx.strokeStyle = `${LINK_RGBA}${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    if (!reduce) raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas ref={ref} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
