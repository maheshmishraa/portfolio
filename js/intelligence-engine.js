/**
 * intelligence-engine.js — Executive HUD V2
 * Live clock · Skill Sync tracker · Section awareness · Session status
 */
(function () {
  'use strict';

  const hud = document.getElementById('exec-hud');
  if (!hud) return;

  const clockEl   = document.getElementById('hud-clock');
  const syncEl    = document.getElementById('hud-sync-pct');
  const syncBar   = document.getElementById('hud-sync-bar');
  const sectionEl = document.getElementById('hud-section');
  const statusEl  = document.getElementById('hud-status-dot');

  /* ── 1. LIVE CLOCK (IST) ── */
  function updateClock() {
    const now = new Date();
    const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const h   = String(ist.getHours()).padStart(2, '0');
    const m   = String(ist.getMinutes()).padStart(2, '0');
    const s   = String(ist.getSeconds()).padStart(2, '0');
    if (clockEl) clockEl.textContent = `${h}:${m}:${s}`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  /* ── 2. SKILL SYNC (Scroll Progress) ── */
  const sections = [
    { id: 'hero',         label: 'COMMAND_CENTER' },
    { id: 'about',        label: 'BIO_NARRATIVE' },
    { id: 'skills',       label: 'SKILL_MATRIX' },
    { id: 'projects',     label: 'PROJECT_VAULT' },
    { id: 'blog',         label: 'INTEL_FEED' },
    { id: 'contact',      label: 'COMM_CHANNEL' },
    { id: 'certificates', label: 'CERT_REGISTRY' },
    { id: 'learning',     label: 'LEARN_PIPELINE' },
  ];

  function updateSync() {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const progress     = Math.min(Math.round((scrollTop / docHeight) * 100), 100);

    if (syncEl)  syncEl.textContent  = `${progress}%`;
    if (syncBar) syncBar.style.width = `${progress}%`;

    // Determine active section
    let activeLabel = sections[0].label;
    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          activeLabel = sec.label;
        }
      }
    }
    if (sectionEl) sectionEl.textContent = activeLabel;
  }

  // Throttled scroll listener
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        updateSync();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  updateSync();

  /* ── 3. SESSION STATUS ── */
  if (statusEl) {
    // Pulse green after boot completes
    window.addEventListener('bootComplete', () => {
      statusEl.classList.add('online');
    });

    // If boot already completed (session memory), set immediately
    if (sessionStorage.getItem('MAHESH_BOOT_COMPLETE')) {
      statusEl.classList.add('online');
    }
  }

  /* ── 4. HUD VISIBILITY ── */
  // Show HUD after a short delay once boot is done
  function revealHUD() {
    setTimeout(() => {
      hud.classList.add('visible');
    }, 800);
  }

  window.addEventListener('bootComplete', revealHUD);
  if (sessionStorage.getItem('MAHESH_BOOT_COMPLETE')) {
    revealHUD();
  }

  /* ── 5. HUD TOGGLE ── */
  const toggleBtn = document.getElementById('hud-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      hud.classList.toggle('collapsed');
    });
  }
})();
