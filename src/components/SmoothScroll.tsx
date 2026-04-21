"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        anchors: {
          offset: -64,
          onComplete: () => {
            if (typeof window !== "undefined" && window.location.hash) {
              const el = document.querySelector(window.location.hash);
              if (el instanceof HTMLElement) el.focus({ preventScroll: true });
            }
          },
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
