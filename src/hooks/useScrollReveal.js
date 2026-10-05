import { useEffect, useRef, useState } from 'react';

/**
 * HCI-principled scroll reveal hook.
 *
 * - Respects `prefers-reduced-motion` — returns visible:true immediately for accessibility.
 * - threshold: fires when element is 12% visible (not too early, not too late).
 * - rootMargin: slight negative top so the trigger feels natural.
 * - Once revealed, it stays revealed (no re-hiding on scroll up).
 *
 * @param {object} options
 * @param {number} [options.threshold=0.12]
 * @param {string} [options.rootMargin='0px 0px -48px 0px']
 * @returns {{ ref, visible }}
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -48px 0px',
} = {}) {
  const ref = useRef(null);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [visible, setVisible] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, prefersReduced]);

  return { ref, visible };
}

/**
 * Returns inline style for a reveal animation.
 *
 * @param {boolean} visible
 * @param {number}  [delay=0]        — stagger delay in ms
 * @param {'up'|'left'|'right'|'scale'|'fade'} [type='up']
 * @param {number}  [duration=600]   — ms
 */
export function revealStyle(visible, delay = 0, type = 'up', duration = 600) {
  const base = {
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
                 transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  const hidden = {
    up:    { opacity: 0, transform: 'translateY(32px)' },
    left:  { opacity: 0, transform: 'translateX(-32px)' },
    right: { opacity: 0, transform: 'translateX(32px)' },
    scale: { opacity: 0, transform: 'scale(0.92)' },
    fade:  { opacity: 0, transform: 'none' },
  };

  const shown = { opacity: 1, transform: 'none' };

  return { ...base, ...(visible ? shown : hidden[type] ?? hidden.up) };
}
