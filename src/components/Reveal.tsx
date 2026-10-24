"use client";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Respects `prefers-reduced-motion` via the CSS class approach — the CSS
 * already disables the animation for reduced-motion users, so this component
 * can fire safely without checking the media query here.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`reveal${delayClass}${className ? " " + className : ""}`}>
      {children}
    </div>
  );
}
