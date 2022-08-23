import './style.scss'; // import styles
import ancients from './assets/Ancients/index';

const container = document.querySelector('.container');
const firstCard = document.querySelector('.ancienst__card-first');
const secondCard = document.querySelector('.ancienst__card-second');
const therdCard = document.querySelector('.ancienst__card-therd');
const fourthCard = document.querySelector('.ancienst__card-fourth');

console.log(ancients);

firstCard.style.backgroundImage = `url(${ancients.azathoth})`;
secondCard.style.backgroundImage = `url(${ancients.cthulhu})`;
therdCard.style.backgroundImage = `url(${ancients.iogSothoth})`;
fourthCard.style.backgroundImage = `url(${ancients.shubNiggurath})`;

