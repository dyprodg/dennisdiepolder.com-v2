/**
 * GSAP Animation Utilities
 * Swiss Design System - Precise, smooth animations
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Swiss easing curves (matching CSS variables)
 */
export const swissEasing = {
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
  swiftOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

/**
 * Scroll-triggered fade-in animation
 */
export function animateFadeIn(
  element: HTMLElement | string,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
  } = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    y = 30,
    stagger = 0,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease: swissEasing.swiftOut,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Scroll-triggered slide-in animation
 */
export function animateSlideIn(
  element: HTMLElement | string,
  options: {
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    duration?: number;
    distance?: number;
  } = {}
) {
  const {
    direction = 'left',
    delay = 0,
    duration = 0.8,
    distance = 100,
  } = options;

  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'right' || direction === 'down' ? distance : -distance;

  return gsap.from(element, {
    [axis]: value,
    opacity: 0,
    duration,
    delay,
    ease: swissEasing.swiftOut,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Parallax scroll effect
 */
export function animateParallax(
  element: HTMLElement | string,
  options: {
    speed?: number;
    start?: string;
    end?: string;
  } = {}
) {
  const { speed = 0.5, start = 'top bottom', end = 'bottom top' } = options;

  return gsap.to(element, {
    y: () => `${speed * 100}%`,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: true,
    },
  });
}

/**
 * Kinetic typography - character animation
 */
export function animateKineticText(
  element: HTMLElement | string,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    scramble?: boolean;
  } = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.05,
    scramble = false,
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  // Split text into characters
  const text = el.textContent || '';
  el.innerHTML = text
    .split('')
    .map((char) => {
      if (char === ' ') return '<span class="char">&nbsp;</span>';
      return `<span class="char">${char}</span>`;
    })
    .join('');

  const chars = el.querySelectorAll('.char');

  // Animate characters
  return gsap.from(chars, {
    opacity: 0,
    y: 50,
    rotationX: -90,
    transformOrigin: '50% 50%',
    duration,
    delay,
    stagger,
    ease: swissEasing.swiftOut,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Scale animation (for images, cards)
 */
export function animateScale(
  element: HTMLElement | string,
  options: {
    from?: number;
    to?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const {
    from = 0.8,
    to = 1,
    duration = 0.8,
    delay = 0,
  } = options;

  return gsap.fromTo(
    element,
    { scale: from, opacity: 0 },
    {
      scale: to,
      opacity: 1,
      duration,
      delay,
      ease: swissEasing.swiftOut,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
}

/**
 * Stagger animation for lists/grids
 */
export function animateStagger(
  elements: HTMLElement[] | NodeListOf<Element> | string,
  options: {
    delay?: number;
    stagger?: number;
    duration?: number;
    direction?: 'up' | 'down';
  } = {}
) {
  const {
    delay = 0,
    stagger = 0.1,
    duration = 0.6,
    direction = 'up',
  } = options;

  return gsap.from(elements, {
    opacity: 0,
    y: direction === 'up' ? 50 : -50,
    duration,
    delay,
    stagger,
    ease: swissEasing.swiftOut,
    scrollTrigger: {
      trigger: elements,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Counter animation (for numbers)
 */
export function animateCounter(
  element: HTMLElement | string,
  options: {
    from?: number;
    to: number;
    duration?: number;
    decimals?: number;
  }
) {
  const { from = 0, to, duration = 2, decimals = 0 } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const obj = { value: from };

  return gsap.to(obj, {
    value: to,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = obj.value.toFixed(decimals);
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Line drawing animation (for SVG paths)
 */
export function animateLineDraw(
  element: SVGPathElement | string,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
  } = {}
) {
  const { duration = 2, delay = 0, ease = swissEasing.swiftOut } = options;

  const el = typeof element === 'string'
    ? document.querySelector<SVGPathElement>(element)
    : element;

  if (!el) return;

  const length = el.getTotalLength();

  // Set up the starting positions
  el.style.strokeDasharray = `${length}`;
  el.style.strokeDashoffset = `${length}`;

  return gsap.to(el, {
    strokeDashoffset: 0,
    duration,
    delay,
    ease,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Clip path reveal animation
 */
export function animateClipReveal(
  element: HTMLElement | string,
  options: {
    direction?: 'horizontal' | 'vertical';
    duration?: number;
    delay?: number;
  } = {}
) {
  const { direction = 'horizontal', duration = 1, delay = 0 } = options;

  const clipPath =
    direction === 'horizontal'
      ? ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
      : ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'];

  return gsap.fromTo(
    element,
    { clipPath: clipPath[0] },
    {
      clipPath: clipPath[1],
      duration,
      delay,
      ease: swissEasing.swiftOut,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
}

/**
 * Rotate in animation
 */
export function animateRotateIn(
  element: HTMLElement | string,
  options: {
    rotation?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const { rotation = 180, duration = 0.8, delay = 0 } = options;

  return gsap.from(element, {
    rotation,
    opacity: 0,
    scale: 0.5,
    duration,
    delay,
    ease: swissEasing.bounce,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Kill all ScrollTrigger instances (cleanup)
 */
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresh ScrollTrigger (after layout changes)
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

/**
 * Initialize animations when DOM is ready
 */
export function initAnimations() {
  // Ensure ScrollTrigger is properly configured
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150,
  });

  // Reduce motion support
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.01);
    ScrollTrigger.disable();
  }
}
