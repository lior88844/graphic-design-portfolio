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
    // How many seconds have already elapsed since the browser first painted
    // the SSR HTML. On localhost this is ~0ms; on a live CDN it can be 500ms–2s,
    // which is why the loader appeared to "restart" at 0% after hydration.
    const elapsedSec = performance.now() / 1000;

    // Remaining time until we COULD dismiss (accounting for already-elapsed time).
    // Never go below 0.5s so the exit animation has room to play.
    const remaining = Math.max(0.5, HIDE_AFTER - elapsedSec);

    // Pre-seed the counter to wherever it should be based on elapsed time,
    // so it never jumps backwards or restarts from 0% mid-animation.
    const animMs = PETAL_END * 1000;
    const tick = 40; // ms per update
    const step = 100 / (animMs / tick);
    let current = Math.min(99, (elapsedSec / PETAL_END) * 100);
    setPct(Math.round(current));

    const counter = setInterval(() => {
      current = Math.min(100, current + step);
      setPct(Math.round(current));
      if (current >= 100) clearInterval(counter);
    }, tick);

    // Gate dismissal on ALL conditions:
    // (a) minimum animation time has elapsed
    // (b) the page 'load' event has fired
    // (c) on the home page, the hero video has fired canplay
    let minTimeDone = false;
    let pageLoaded = document.readyState === 'complete';

    // On the home page wait for the hero video; on every other page this gate
    // starts as already satisfied. Also check the synchronous flag in case the
    // video mounted and fired canplay before this effect ran.
    const isHome = window.location.pathname === '/' || window.location.pathname === '';
    const w = window as Window & { __heroVideoReady?: boolean };
    let heroReady = !isHome || w.__heroVideoReady === true;

    const tryHide = () => {
      if (minTimeDone && pageLoaded && heroReady) setDone(true);
    };

    const minTimer = setTimeout(() => {
      minTimeDone = true;
      tryHide();
    }, remaining * 1000);

    // Hard cap: never hold the loader beyond 8 seconds total page time so a
    // single slow or failing resource cannot hang the site indefinitely.
    const maxWaitMs = Math.max(0, 8000 - elapsedSec * 1000);
    const maxTimer = setTimeout(() => setDone(true), maxWaitMs);

    const onLoad = () => {
      pageLoaded = true;
      tryHide();
    };

    const onHeroReady = () => {
      heroReady = true;
      tryHide();
    };

    if (!pageLoaded) {
      window.addEventListener('load', onLoad);
    }

    if (!heroReady) {
      window.addEventListener('hero-media-ready', onHeroReady);
    }

    return () => {
      clearInterval(counter);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener('load', onLoad);
      window.removeEventListener('hero-media-ready', onHeroReady);
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
