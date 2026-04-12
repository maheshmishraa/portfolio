/**
 * main.js — Central Bootstrapper
 * Orchestrates the modular interactive suite.
 */
import { initExecutiveCursor } from './engine/cursor.js';

window.addEventListener('load', () => {
  // Initialize Cursor
  initExecutiveCursor();

  // 3D Card Tilt Engine
  const cards = document.querySelectorAll('.bento-card, .skill-card, .cert-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  });
});
