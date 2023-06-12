// burger
burgerIcon.addEventListener('click', () => { toggleClass([burgerIcon, headerInner, bodyLock]) });
navLinks.forEach(link => link.addEventListener('click', () => {
    removeClass([burgerIcon, headerInner, bodyLock]);
}));