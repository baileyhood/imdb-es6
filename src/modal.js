export default function modalInit () {

    //TODO: Use data-attrs instead of class names
    const button = document.querySelectorAll('[data-modal-open]'),
        modal = document.querySelector('.modal'),
        closeButton = document.querySelector('.modal__close-btn');

    var toggleClass = () => {
        modal.classList.toggle('is-visible');
    }

    //TODO: Scope to modal
    if (button && modal) {

        button.forEach((el) => {
            el.addEventListener('click', toggleClass);
        })

        closeButton.addEventListener('click', () => {
            modal.classList.toggle('is-visible');
        });
        return self;
    }

} //end of function
