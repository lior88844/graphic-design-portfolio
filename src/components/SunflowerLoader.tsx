'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PETAL_COUNT = 12;
const PETAL_DELAY_START = 0.3;   // seconds before first petal
const PETAL_DELAY_STEP = 0.14;   // seconds between each petal
const PETAL_DURATION = 0.4;      // seconds each petal takes to grow

// Total time until last petal finishes + 0.6s hold before fade-out
const PETAL_END =
  PETAL_DELAY_START + (PETAL_COUNT - 1) * PETAL_DELAY_STEP + PETAL_DURATION;
const HIDE_AFTER = PETAL_END + 0.6;

export default function SunflowerLoader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    // Percentage ticks from 0 → 100 over the petal animation window
    const animMs = PETAL_END * 1000;
    const tick = 40; // ms per update
    const step = 100 / (animMs / tick);
    let current = 0;

    const counter = setInterval(() => {
      current = Math.min(100, current + step);
      setPct(Math.round(current));
      if (current >= 100) clearInterval(counter);
    }, tick);

    // Fade out the overlay
    const hide = setTimeout(() => setDone(true), HIDE_AFTER * 1000);

    return () => {
      clearInterval(counter);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'oklch(0.985 0.012 88)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Sunflower SVG */}
          <svg
            viewBox="-80 -80 160 160"
            width="168"
            height="168"
            role="img"
            aria-label={`Loading — ${pct}%`}
            overflow="visible"
          >
            {/* Petals — each grows from the inner circle edge outward */}
            {Array.from({ length: PETAL_COUNT }).map((_, i) => (
              <g key={i} transform={`rotate(${i * (360 / PETAL_COUNT)})`}>
                {/*
                  cx=0, cy=-(center_r + petal_ry) = -(24+22) = -46
                  Bottom edge of ellipse = cy + ry = -46+22 = -24 → sits on center circle
                */}
                <ellipse
                  cx="0"
                  cy="-46"
                  rx="10"
                  ry="22"
                  fill="#FBBF24"
                  className="loader-petal"
                  style={{
                    animationDelay: `${PETAL_DELAY_START + i * PETAL_DELAY_STEP}s`,
                  }}
                />
              </g>
            ))}

            {/* Center seed disc — static, no animation to avoid SSR flash */}
            <circle r="24" fill="#7C3F00" />

            {/* Seed dot pattern on center — static */}
            {[
              [0, 0], [10, 0], [-10, 0], [0, 10], [0, -10],
              [7, 7], [-7, 7], [7, -7], [-7, -7],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="2" fill="#5C2D00" />
            ))}
          </svg>

          {/* Percentage counter */}
          <motion.p
            className="mt-7 font-mono text-xl tabular-nums tracking-wide"
            style={{ color: 'oklch(0.48 0.018 72)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {pct}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
