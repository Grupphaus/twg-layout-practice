this.addEventListener('load', () => { 
    console.log('0000');

    const MODAL_TRIGGER = document.getElementById('modal-trigger');
    const MODAL = document.getElementById('modal');
    const MODAL_MENU = document.getElementById('modal-menu');
    const MODAL_BACKDROP = document.getElementById('modal-backdrop');

    MODAL_TRIGGER.addEventListener('click', () => {
        MODAL.style.display = 'block';
        setTimeout(() => {
            MODAL.style.opacity = '1';
            MODAL_MENU.style.opacity = '1';
            MODAL_MENU.classList.add('no-translate');
            document.body.classList.add('modal-active');
        }, 50);
    });

    MODAL_BACKDROP.addEventListener('click', () => {
        MODAL.style.opacity = '0';
        MODAL_MENU.classList.remove('no-translate');
        document.body.classList.remove('modal-active');
        setTimeout(() => {
            MODAL_MENU.style.opacity = '0';
            MODAL.style.display = 'none';
        }, 150);
    })
})