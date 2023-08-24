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
const themeToggleBtns = document.querySelectorAll('#theme-toggle');


mobileNav();