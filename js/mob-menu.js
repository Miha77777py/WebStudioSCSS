(() => { 
    const refs = { 
        openMenuBtn: document.querySelector('.mob-menu__open'), 
        closeMenuBtn: document.querySelector('.mob-menu__close'), 
        menu: document.querySelector('.mob-menu'), 
    }; 
     
    refs.openMenuBtn.addEventListener('click', toggleMenu); 
    refs.closeMenuBtn.addEventListener('click', toggleMenu); 
     
    function toggleMenu() { 
        refs.menu.classList.toggle('is-hidden-mob'); 
    } 
})();