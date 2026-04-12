/**
 * cursor.js — Executive Cursor Engine
 * Handles magnetic stickiness, lerped follow, and state morphing.
 */
export function initExecutiveCursor() {
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  outer.className = 'cursor-outer';
  inner.className = 'cursor-inner';
  outer.appendChild(inner);
  document.body.appendChild(outer);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;

    cursorX = cursorX + distX * 0.15;
    cursorY = cursorY + distY * 0.15;

    outer.style.left = `${cursorX}px`;
    outer.style.top  = `${cursorY}px`;

    requestAnimationFrame(animate);
  };
  animate();

  // Magnetic Interaction
  const interactives = document.querySelectorAll('a, button, .bento-card, .skill-card, .cert-card, .term-header');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => outer.classList.add('active'));
    el.addEventListener('mouseleave', () => outer.classList.remove('active'));
  });
}
