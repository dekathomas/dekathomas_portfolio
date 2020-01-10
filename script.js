function openLink() {
	window.open(`${this.dataset.link}`);
}


// Social Media Icon
const socials = document.querySelectorAll('.main---social div');

socials.forEach(social => social.addEventListener('mouseover', () => {
	social.classList.toggle('open');
	social.addEventListener('click', openLink);
}));

socials.forEach(social => social.addEventListener('mouseout', () => {
	social.classList.toggle('open');
}));






// Page Slider
const thumbnails = document.querySelectorAll('.thumbnail ul li');
const bg = document.querySelector('.background-thumbnail');
let sign = 0;

bgPosition();

function bgPosition() {
	if(window.scrollY === 0) {
		bg.style.top = `${thumbnails[0].offsetTop}px`;
		sign = 0;
	} else if(window.scrollY === 625) {
		bg.style.top = `${thumbnails[1].offsetTop}px`;
		sign = 1;
	} else if(window.scrollY === 1250) {
		bg.style.top = `${thumbnails[2].offsetTop}px`;
		sign = 2;
	}
}

window.addEventListener('wheel', e => {
	if(e.deltaY > 0) {
		if(sign < 2) {
			sign++;
			window.scrollTo(0, window.innerHeight*sign);
		}
	} else if(e.deltaY < 0) {
		if(sign > 0) {
			sign--;
			window.scrollTo(0, window.innerHeight*sign);
		}
	}

	bg.style.top = `${thumbnails[sign].offsetTop}px`;
})





// Scroll Mouse Animation
const scroll = document.querySelector('.scroll');

setInterval(() => {
	scroll.style.transform = 'rotate(90deg) translateX(5px)';
	scroll.style.opacity = '0';
	scroll.style.transition = 'ease-in 0.3s';

	setTimeout(() => {
		scroll.style.transform = 'rotate(90deg) translateX(0px)';
		scroll.style.opacity = '1';
		scroll.style.transition = 'none';
	}, 500)
}, 1000);





// Portfolio background
const cards = [...document.querySelectorAll('.card')];
const background = document.querySelector('.background-card');

background.style.width = `${cards[0].offsetWidth}px`;
background.style.height = `${cards[0].offsetHeight}px`;

cards.forEach(card => {
	const p = card.querySelector('p');

	card.addEventListener('mouseover', () => {
		background.style.left = `${card.offsetLeft}px`;
		background.style.opacity = '1';
		background.style.background = `url(img/${(card.classList.value).slice(5)}.png)`;
		background.style.backgroundSize = 'cover';
		background.style.backgroundPosition = 'center';
		background.style.opacity = '0.25';
		p.style.opacity = '1';
		p.style.transform = 'translateY(0)';
	})

	card.addEventListener('mouseout', () => {
		p.style.opacity = '0';
		p.style.transform = 'translateY(20px)';
		background.style.opacity = '0';
	})

	card.addEventListener('click', openLink);
});




// Age counter
const age = document.querySelector('.age');

const nowYear = new Date().getFullYear();
const nowMonth = new Date().getMonth();
const nowDate = new Date().getDate();

const birthYear = 2000;
const birthMonth = 11;
const birthDate = 23;

if(nowDate >= birthDate) {
	age.innerHTML = nowMonth >= birthMonth ? nowYear - birthYear : nowYear - birthYear - 1;
} else {
	age.innerHTML = nowYear - birthYear - 1;
}