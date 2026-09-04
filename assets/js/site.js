(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');

  // Default is ALWAYS light. OS preference is ignored.
  // Dark mode only applies if the visitor clicked the toggle themselves.
  root.dataset.theme = (saved === 'dark') ? 'dark' : 'light';

  const btn = document.getElementById('themetog');
  if (btn) btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();