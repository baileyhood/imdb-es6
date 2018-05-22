(function(app){

    var MODULE_NAME = 'MOVIEPAGE';

    var self = app[MODULE_NAME] = {
        init: () => {
            console.log(MODULE_NAME + ' initialized');
            self.triggerModal();
        }
    }

    var dataUrl = app.SEARCH.dataUrl;

    document.addEventListener('custom-movie-event', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((el) => {
            el.addEventListener('click', () => {
                const imdbId = el.getAttribute('data-movie-id');
                const search = dataUrl + 'i=' + imdbId;
                self.getData(search);
            });
        });
    });

    self.triggerModal = () => {
        const button = document.querySelector('.modal__trigger'),
            modal = document.querySelector('.modal__container'),
            closeButton = document.querySelector('.modal__close-btn');

        if (button && modal) {
            button.addEventListener('click', () => {
                modal.classList.toggle('is-visible');
            });
            closeButton.addEventListener('click', () => {
                modal.classList.toggle('is-visible');
            });
            return self;
        }
    }

    self.getData = (search) => {
        fetch(search)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(() => console.log('An error occured'))
    }

})(window._APP = (window._APP || {}));
