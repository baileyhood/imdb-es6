const form = document.querySelector('.search-form');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const inputValue = document.querySelector('.search-input').value;
	const dataURL = 'http://www.omdbapi.com/?apikey=3a3eeb7f&';
	const title = 's=' + inputValue.split(' ').join('+');
	const search = dataURL + title;
	console.log(search);
	getData(search);
});


var getData = (search) => {
	fetch(search)
	.then(response => response.json())
	.then(data => {
		console.log('DATA', data);
	})
	.catch(() => console.log('An error occured'))
};
