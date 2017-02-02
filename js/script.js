'use strict';

const button = document.querySelector('.button');
const span = document.querySelector('span.ripple');

button.addEventListener('click', effectMaterial);

function effectMaterial(e) {
	const self = this;

	span.classList.remove('rippleEffect');

	/* Get settings */
	let btnOffsetLeft = self.offsetLeft;
	let btnOffsetTop = self.offsetTop;
	let buttonWidth = self.offsetWidth;
	let buttonHeight = self.offsetHeight;

	/* Make it round! */
	if (buttonWidth >= buttonHeight) {
		buttonHeight = buttonWidth;
	} else {
		buttonWidth = buttonHeight;
	}

	/* Get the center of the element */
	let x = (e.pageX - btnOffsetLeft) - (buttonWidth / 2);
	let y = (e.pageY - btnOffsetTop) - (buttonHeight / 2);

	/* Add the ripples CSS and start the animation */
	let style = `
		width: ${buttonWidth}px;
		height: ${buttonHeight}px;
		top: ${y}px;
		left: ${x}px;
	`;
	
	span.style.cssText = style.trim();
	span.classList.add('rippleEffect');
}