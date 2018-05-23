import modalInit from './modal';

(function(app){

	var MODULE_NAME = 'SEARCH';

	var self = app[MODULE_NAME] = {
		init: () => {
			console.log(MODULE_NAME + ' initialized');
		}
	}

	const form = document.querySelector('.search-form'),
		nextButton = document.querySelector('.next-page-button'),
		prevButton = document.querySelector('.previous-page-button');

	var search = '',
		pageNum = 1;

	self.dataUrl = 'http://www.omdbapi.com/?apikey=3a3eeb7f&';

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const inputValue = document.querySelector('.search-input').value;
		const title = 's=' + inputValue.split(' ').join('+');
		search = self.dataUrl + title;
		getData(search);
	});


	const getData = (search, pageNum) => {
		if (pageNum) {
			const number = `&page=${pageNum}`;
			search = search + number;
		}
		fetch(search)
		.then(response => response.json())
		.then(data => {
			displayResults(data);
			var event = new CustomEvent("custom-movie-event", { "detail": "Example of an event" });
			document.dispatchEvent(event);
		})
		.catch(() => console.log('An error occured'))
	};

	const displayResults = (data) => {
		const cardContainer = document.querySelector('.card-container'),
			results = data.Search;

		cardContainer.innerHTML = '';
		results.forEach((el) => {
			cardContainer.insertAdjacentHTML('beforeend',
				`<div class="card col-sm-4" data-movie-id=${el.imdbID}>
					<img src="${el.Poster}">
					<h3>${el.Title}</h3>
					<button data-modal-open="">More details</button>
				</div>`
			);
		});
		//TODO: Make callback
		modalInit();
	}

	nextButton.addEventListener('click', () => {
		pageNum++;
		getPageData();
	});

	prevButton.addEventListener('click', () => {
		pageNum--;
		getPageData();
	});

	const getPageData = () => {
		getData(search, pageNum);
		if (pageNum > 1) {
			prevButton.classList.remove('is-hidden');
		}
		else {
			prevButton.classList.add('is-hidden');
		}
	}


})(window._APP = (window._APP || {}));
