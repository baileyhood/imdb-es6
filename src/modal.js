export default function modalInit () {

	//TODO: Use data-attrs instead of class names
	const button = document.querySelectorAll('[data-modal-open]'),
		modal = document.querySelector('.modal'),
		closeButton = document.querySelector('.modal__close-btn');

	const toggleClass = () => {
		modal.classList.toggle('is-visible');
	};

	//TODO: Scope to modal
	if (button && modal && !modalEventsTriggered) {
		console.log('ran');
		button.forEach((el) => {
			el.addEventListener('click', toggleClass);
		});

		closeButton.addEventListener('click', toggleClass);
		return self;
	}

} //end of function
