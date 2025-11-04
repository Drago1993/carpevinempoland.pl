document.addEventListener('DOMContentLoaded', () => {
    const sel = document.getElementById('language-switcher');
    let currentLang = localStorage.getItem('selectedLanguage') || 'en'; // Default to 'en' if none saved

    // Set initial language based on stored value
    document.querySelectorAll('.en, .pl').forEach(el => {
        el.style.display = el.classList.contains(currentLang) ? 'block' : 'none';
    });
    sel.value = currentLang;

    // Update language on change and save to localStorage
    sel.addEventListener('change', e => {
        currentLang = e.target.value;
        document.querySelectorAll('.en, .pl').forEach(el => {
            el.style.display = el.classList.contains(currentLang) ? 'block' : 'none';
        });
        localStorage.setItem('selectedLanguage', currentLang); // Save the selected language
    });
});