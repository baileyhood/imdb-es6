let modalTriggered = false;

export default function modalInit () {

	//TODO: Use data-attrs instead of class names
	const button = document.querySelectorAll('[data-modal-open]'),
		modal = document.querySelector('.modal'),
		closeButton = document.querySelector('.modal__close-btn');

	const toggleClass = () => {
		modal.classList.toggle('is-visible');
	};

	//TODO: Scope to modal
	if (button && modal) {
		button.forEach((el) => {
			el.addEventListener('click', toggleClass);
		});

		if (!modalTriggered) {
			closeButton.addEventListener('click', toggleClass);
			modalTriggered = true;
		}
	}

} //end of function
