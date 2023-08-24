// toggle the mobile nav menu
const mobileNav = () => {
    const headerHam = document.querySelector('.header__hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    let isMobileNavOpen = false;
    
    headerHam.addEventListener('click', () => {
        if (isMobileNavOpen) {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'
            isMobileNavOpen = false;
        } else {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
            isMobileNavOpen = true;
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
};

// dark mode toggle
const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    const toggleSun = document.querySelectorAll('#toggle-sun');
    const toggleMoon = document.querySelectorAll('#toggle-moon');
    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add(theme);
    theme && toggleMoon.forEach(element => element.style.display = 'block');
    theme && toggleSun.forEach(element => element.style.display = 'none');

    // Handler
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
            // remember light mode
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
                // turn dark mode on , sun on
                toggleSun.forEach(element => {
                    element.style.display = 'none';
                });
                toggleMoon.forEach(element => {
                    element.style.display = 'block';
                });
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
                // turn light mode on, moon on
                toggleSun.forEach(element => {
                    element.style.display = 'block';
                });
                toggleMoon.forEach(element => {
                    element.style.display = 'none';
                });
            }
       }
    
    // Event
    themeToggleBtns.forEach(btn => btn.addEventListener('click', handleThemeToggle));
};

mobileNav();
darkMode();
