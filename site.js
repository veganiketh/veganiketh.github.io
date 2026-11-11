// Shared by every page: the twinkling sky and the light/dark toggle.
// Background sky: scatter small stars at random positions, each with its
// own size, brightness and twinkle speed.
const sky = document.querySelector('.sky');
const starCount = 140;
for (let i = 0; i < starCount; i++) {
  const s = document.createElement('span');
  const size = Math.random() < 0.85 ? 1 : 2;               // mostly tiny, a few slightly bigger
  s.style.left = (Math.random() * 100) + '%';
  s.style.top = (Math.random() * 100) + '%';
  s.style.width = s.style.height = size + 'px';
  s.style.setProperty('--peak', (0.35 + Math.random() * 0.5).toFixed(2));
  s.style.animationDuration = (2.5 + Math.random() * 4).toFixed(1) + 's';
  s.style.animationDelay = (-Math.random() * 6).toFixed(1) + 's';
  sky.appendChild(s);
}

// Theme toggle: switches between dark and light, and remembers the choice
// for this visitor's browser.
const toggle = document.querySelector('.theme-toggle');
function setToggleLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}
setToggleLabel();
toggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  setToggleLabel();
});

// Copy-email buttons: copy the address in data-email and confirm with "Copied".
// If copying is blocked by the browser, fall back to opening an email.
document.querySelectorAll('.copy-email').forEach((btn) => {
  const label = btn.querySelector('.copy-label');
  const original = label.textContent;
  btn.setAttribute('aria-label', 'Copy email address ' + btn.dataset.email);
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.email);
      label.textContent = 'Copied';
      btn.classList.add('is-copied');
      setTimeout(() => { label.textContent = original; btn.classList.remove('is-copied'); }, 1800);
    } catch (e) {
      location.href = 'mailto:' + btn.dataset.email;
    }
  });
});
