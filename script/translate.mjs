export function initGoogleTranslate() {
  const script = document.createElement('script');
  script.src =
    '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        autoDisplay: false,
      },
      'google_translate_element',
    );

    setupCustomTranslate();
  };
}

function setupCustomTranslate() {
  const toggle = document.getElementById('languageToggle');
  const dropdown = document.getElementById('languageDropdown');

  toggle?.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      waitAndTranslate(lang);
      dropdown.classList.add('hidden');
    });
  });
}

// Helper to wait for <select> to appear
function waitAndTranslate(lang) {
  const interval = setInterval(() => {
    const select = document.querySelector('select.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
      clearInterval(interval);
    }
  }, 100);
}
