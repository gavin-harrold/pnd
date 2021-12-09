//check for web animations
if(document.body.animate) {
	document.querySelector('intro-button').addEventListener('click', pop);
}
else {
	console.log("error");
}

function pop(e) {
	for(let i = 0; i < 30; i++) {
		createParticle(e.clientX, e.clientY);
	}
}

function createParticle(x, y) {
	const particle = document.createElement('particle');
	document.body.appendChild(particle);

	const size = Math.floor(Math.random() * 20 + 5);

	particle.style.width = '${size}px';
	particle.style.height = '${size}px';

	particle.style.background = 'hsl(${Math.random() * 90 + 180}, 70%, 60%)';

	const destinationX = x + (Math.random() - 0.5) * 2 * 75;
	const destinationY = y + (Math.random() - 0.5) * 2 * 75;

	const animation = particle.animate([
		{
 			transform: 'translate(${x-(size/2)}px, ${y-(size/2)}px)',
			opacity: 1
		},
		{
			transform: 'translate(${destinationX}px, ${destinationY}px)',
			opacity: 0
		}
	], {
		duration: 500 + Math.random() * 1000,
		easing: 'cubic-bezier(0, .9, .57, 1)',
		delay: Math.random() * 200
	});

	animation.onfinish = () => {
		particle.remove();
	};
}


