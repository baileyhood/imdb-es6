(function(app){

    var MODULE_NAME = 'MOVIEPAGE';

    var self = app[MODULE_NAME] = {
        init: () => {
            console.log(MODULE_NAME + ' initialized');
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

    self.getData = (search) => {
        fetch(search)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(() => console.log('An error occured'))
    }

})(window._APP = (window._APP || {}));
