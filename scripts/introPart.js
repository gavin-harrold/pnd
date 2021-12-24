//check for web animations
if(document.body.animate) {
	document.querySelector('#introButton').addEventListener('click', pop);
}
else {
	console.log("error");
}

async function beginIntro() {
	await new Promise(r => setTimeout(r, 1000));
	document.body.innerHTML = ""; //any clearers?
}

function pop(e) {
	for(let i = 0; i < 30; i++) {
		createParticle(e.clientX, e.clientY);
	}
	setTimeout(beginIntro, 200); //maybe have it ease in somehow? works for now at least
}

function createParticle(x, y) {
	const particle = document.createElement('particle');
	document.body.appendChild(particle);

	const size = Math.floor(Math.random() * 20 + 5);
	
	//` <--- this guy is pretty funny
	//used for interpolating variable with string, not to be confused with single quotes :(
	particle.style.width = `${size}px`;
	particle.style.height = `${size}px`;

	particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;

	const destinationX = x + (Math.random() - 0.5) * 2 * 75;
	const destinationY = y + (Math.random() - 0.5) * 2 * 75;

	const animation = particle.animate([
		{
 			transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
			opacity: 1
		},
		{
			transform: `translate(${destinationX}px, ${destinationY}px)`,
			opacity: 0
		}
	], {
		duration: Math.random() * 1000 + 500,
		//when the bezier is cubic :flushed_face:
		easing: 'cubic-bezier(0, .9, .57, 1)',
		delay: Math.random() * 200
	});

	animation.onfinish = () => {
		particle.remove();
	};
}


