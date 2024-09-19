const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Referense to system settings
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn__active");
    document.body.classList.add("dark");
}

// 2. Check dark theme in LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn__active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn__active");
    document.body.classList.remove("dark");
}

// If system setting change, we will change theme

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorSheme = event.matches ? "dark" : "light";

    if(newColorSheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn__active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove("dark-mode-btn__active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', 'light');

    }

});

// Turn on dark mode with btn
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn__active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');

    }
}


