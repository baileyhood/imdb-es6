const form = document.querySelector('.search-form');
const nextButton = document.querySelector('.next-page-button');
const prevButton = document.querySelector('.previous-page-button');
var search = '';
var pageNum = 1;

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const inputValue = document.querySelector('.search-input').value;
	const dataURL = 'http://www.omdbapi.com/?apikey=3a3eeb7f&';
	const title = 's=' + inputValue.split(' ').join('+');
	search = dataURL + title;
	console.log(search);
	getData(search);
});


const getData = (search, pageNum) => {
	if (pageNum) {
		const number = `&page=${pageNum}`;
		search = search + number;
		console.log('search = ', search);
	}
	fetch(search)
	.then(response => response.json())
	.then(data => {
		displayResults(data);
	})
	.catch(() => console.log('An error occured'))
};

const displayResults = (data) => {
	const cardContainer = document.querySelector('.card-container');
	cardContainer.innerHTML = '';
	const results = data.Search;
	results.forEach((el) => {
		cardContainer.insertAdjacentHTML('beforeend',
			`<div class="card col-sm-4">
				<img src="${el.Poster}">
				<h3>${el.Title}</h3>
			</div>`
		);
	});
}

nextButton.addEventListener('click', () => {
	pageNum++;
	console.log('pageNum', pageNum);
	getData(search, pageNum);
});

prevButton.addEventListener('click', () => {
	pageNum--;
	console.log('pageNum', pageNum);
	getData(search, pageNum);
});
