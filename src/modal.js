(function(){
    //TODO: Use data-attrs instead of class names
    const button = document.querySelector('.modal__trigger'),
        modal = document.querySelector('.modal__container'),
        closeButton = document.querySelector('.modal__close-btn');

    //TODO: Scope to modal
    if (button && modal) {
        button.addEventListener('click', () => {
            modal.classList.toggle('is-visible');
        });
        closeButton.addEventListener('click', () => {
            modal.classList.toggle('is-visible');
        });
        return self;
    }
}());
