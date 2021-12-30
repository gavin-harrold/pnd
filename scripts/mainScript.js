//main script??
//
const folder = "imgs/bruh/";
const fileEnding = ".jpg";

let btnArray = [];

function initiateStuff() {
	document.body.style.backgroundImage = "url('imgs/bookshelf.png')";
	createBackground();
}

function rng(min, max) {
	return Math.floor(Math.random() * max + min);
}

function createBackground() {
	let modalDiv = document.createElement("div");
	modalDiv.id = "for-modal";
	document.body.appendChild(modalDiv);

	let backgroundDiv = document.createElement("div");
	backgroundDiv.id = "backDiv";
	//let bookshelfCanvas = document.createElement("canvas");
	//bookshelfCanvas.id = "mainCanvas";
	let buttonHolder = document.createElement("div");
	buttonHolder.id = "button-holder";
	
	//backgroundDiv.appendChild(bookshelfCanvas);
	backgroundDiv.appendChild(buttonHolder);
	document.body.appendChild(backgroundDiv);

	//var bookshelf = document.getElementById("mainCanvas");
	//var bookshelftx = bookshelf.getContext("2d");
	//bookshelftx.fillStyle = "#964B00";
	//bookshelftx.fillRect(20, 20, 150, 100);

	for(let i = 0; i < 6; i++) {
		//const folder = "imgs/bruh/book";
		var book = `${rng(1,6)}`;
		//const fileEnding = ".jpg";
		const path = folder.concat("book",book, fileEnding);
		console.log(path);
		var btn = document.createElement("button");
		btn.id = `btn${i}`;
		btn.style.background = `url(${path})`;
		document.getElementById("button-holder").appendChild(btn);
		btnArray.push(btn);
		//btn.innerHTML = path;
	}
	fillInfo();		
}

function fillInfo() {

	let modal = document.createElement("div");
	modal.className = "modal";
	document.getElementById("for-modal").appendChild(modal);

	let closeBtn = document.createElement("span");
	closeBtn.className = "close";
	closeBtn.innerHTML += "&times;";
	modal.appendChild(closeBtn);	


	let modalImg = document.createElement("img");
	modalImg.className = "modal-content";
	modalImg.id = "img01";
	modal.appendChild(modalImg);


        let caption = document.createElement("div");
        caption.id = "caption";
        modal.appendChild(caption);

	let picArray = ["bills", "bridge", "hug", "IMG_0812", "IMG_0813", "IMG_0814", "IMG_0815", "IMG_0816", "IMG_0826", "IMG_0827", "lake", "study", "us",
	"waterfall"];
	let descArray = ["Even though we were both freezing, I loved every second of my time with you at the Bill's game. Hopefully we can make a Pat's game someday.",
	"One of many pictures taken at Letchworth. This was when we ran into that old couple and they took pictures of us. This was the only one my eyes were open for.",
	"Our first picture together. While it's not the highest quality, it's one of my favorites because I get to look back at this short amount of time and see how far we've come.",
	"Just a student hard at work.",
	"This should be your LinkedIn profile pic, really shows your best features.",
	"Even though we may have been told to be quiet during ridiculous hours, I enjoyed the times we spent working on homework in your room.",
	"^ this be the face I make when you're not around to hug me.",
	"The tattoo you gave me which I will forever cherish.",
	"I love this picture because of your smile. You don't know I'm taking the photo and so the picture is able to capture your pure unprompted smile. Your smile gives me butterflies everytime I see it.",
	"Just another picture of you from one of the night's at the girls. I always had a lot of fun and appreciated you inviting me.",
	"This is one of the pictures we took at the lake when we were driving to your house. While it's a simple photo, it's still a great memory of mine, just like the rest of the trip.",
	"A work session in your room at home, and an absolutely beautiful picture of my boo.",
	"Another picture of us from Letchworth. I loved that day, despite it getting a little tiring at times with all the stair-climbing.",
	"A picture from Letchworth, displaying the beautiful day and even more beautiful girl. ily"
	]
	
	for(let i = 0; i < 6; i++) {
		btnArray[i].onclick = function() {
			var rnd = rng(0, 14);
			var pic = picArray[rnd];
			var desc = descArray[rnd];
			modal.style.display = "block";
			modalImg.src = folder.concat(`${pic}`, fileEnding.toUpperCase());
			caption.innerHTML = desc;
			caption.style.backgroundColor = "#000000"
		}
		var span = document.getElementsByClassName("close")[0];

		span.onclick = function() {
			modal.style.display = "none";
		}			
	}			
}

