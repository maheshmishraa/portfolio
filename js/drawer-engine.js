/**
 * drawer-engine.js — Elastic Project Drawer
 * Intercepts project card clicks, scrapes content, renders a deep-dive panel.
 */
(function () {
  'use strict';

  const overlay   = document.getElementById('drawer-overlay');
  const drawer    = document.getElementById('project-drawer');
  const closeBtn  = document.getElementById('drawer-close');
  const titleEl   = document.getElementById('drawer-title');
  const imgEl     = document.getElementById('drawer-img');
  const tagsEl    = document.getElementById('drawer-tags');
  const descEl    = document.getElementById('drawer-desc');
  const insightEl = document.getElementById('drawer-insight');
  const impactEl  = document.getElementById('drawer-impact');
  const linkEl    = document.getElementById('drawer-link');

  if (!drawer || !overlay) return;

  /* ── OPEN DRAWER ── */
  function openDrawer(card) {
    // Scrape data from clicked card
    const title   = card.querySelector('.pj-title')?.textContent || 'Untitled Project';
    const desc    = card.querySelector('.pj-desc')?.textContent || '';
    const tags    = card.querySelectorAll('.pj-tags span');
    const insight = card.querySelector('.pj-insight p')?.textContent || '';
    const impact  = card.querySelector('.pj-impact p')?.textContent || '';
    const img     = card.querySelector('.pj-img');
    const link    = card.querySelector('.pj-link')?.getAttribute('href');
    const catNum  = card.querySelector('.pj-n')?.textContent || '';

    // Populate drawer
    if (titleEl)   titleEl.textContent = title;
    if (descEl)    descEl.textContent  = desc;
    if (insightEl) insightEl.textContent = insight;
    if (impactEl)  impactEl.textContent  = impact;

    // Tags
    if (tagsEl) {
      tagsEl.innerHTML = '';
      tags.forEach(t => {
        const span = document.createElement('span');
        span.textContent = t.textContent;
        tagsEl.appendChild(span);
      });
    }

    // Image
    if (imgEl) {
      if (img) {
        imgEl.src = img.src;
        imgEl.alt = title;
        imgEl.style.display = 'block';
      } else {
        imgEl.style.display = 'none';
      }
    }

    // External link
    if (linkEl) {
      if (link && link !== '#') {
        linkEl.href = link;
        linkEl.style.display = 'inline-block';
      } else {
        linkEl.style.display = 'none';
      }
    }

    // Category label
    const catLabel = document.getElementById('drawer-cat');
    if (catLabel) catLabel.textContent = catNum;

    // Activate
    overlay.classList.add('active');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Animate in with GSAP if available
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(drawer,
        { x: '100%' },
        { x: '0%', duration: 0.6, ease: 'elastic.out(1, 0.75)' }
      );
      gsap.fromTo(overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.35 }
      );
    }
  }

  /* ── CLOSE DRAWER ── */
  function closeDrawer() {
    if (typeof gsap !== 'undefined') {
      gsap.to(drawer, {
        x: '100%', duration: 0.4, ease: 'power3.in',
        onComplete: () => {
          drawer.classList.remove('open');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
    } else {
      drawer.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /* ── EVENT LISTENERS ── */

  // Close on overlay click
  overlay.addEventListener('click', closeDrawer);

  // Close button
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Intercept project card clicks
  document.addEventListener('click', e => {
    const card = e.target.closest('.pj-card');
    if (!card) return;

    // Don't intercept if they clicked a direct external link with a real URL
    const directLink = e.target.closest('.pj-link');
    if (directLink) {
      const href = directLink.getAttribute('href');
      if (href && href !== '#') return; // Let external links work normally
    }

    e.preventDefault();
    openDrawer(card);
  });
})();
