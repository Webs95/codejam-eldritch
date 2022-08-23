import './style.scss'; // import styles
import ancients from './assets/Ancients/index';
import ancientsData from './data/ancients';
// Variables
// Ancients cards
const firstCard = document.querySelector('.ancienst__card-first');
const secondCard = document.querySelector('.ancienst__card-second');
const therdCard = document.querySelector('.ancienst__card-therd');
const fourthCard = document.querySelector('.ancienst__card-fourth');
// Stages
// Stage One
const stageOneGreenDot = document.querySelector('#dot-stage1-green');
const stageOneBrownDot = document.querySelector('#dot-stage1-brown');
const stageOneBlueDot = document.querySelector('#dot-stage1-blue');
// Stage Two
const stageTwoGreenDot = document.querySelector('#dot-stage2-green');
const stageTwoBrownDot = document.querySelector('#dot-stage2-brown');
const stageTwoBlueDot = document.querySelector('#dot-stage2-blue');
// Stage Three
const stageThreeGreenDot = document.querySelector('#dot-stage3-green');
const stageThreeBrownDot = document.querySelector('#dot-stage3-brown');
const stageThreeBlueDot = document.querySelector('#dot-stage3-blue');

function getAncient(data) {
  firstCard.style.backgroundImage = `url(${data.azathoth})`;
  secondCard.style.backgroundImage = `url(${data.cthulhu})`;
  therdCard.style.backgroundImage = `url(${data.iogSothoth})`;
  fourthCard.style.backgroundImage = `url(${data.shubNiggurath})`;
}

function getStages(data) {
  let index = 0;
  // First
  stageOneGreenDot.textContent = `${data[0].firstStage.greenCards}`;
  stageOneBrownDot.textContent = `${data[0].firstStage.brownCards}`;
  stageOneBlueDot.textContent = `${data[0].firstStage.blueCards}`;
  // Second
  stageTwoGreenDot.textContent = `${data[0].secondStage.greenCards}`;
  stageTwoBrownDot.textContent = `${data[0].secondStage.brownCards}`;
  stageTwoBlueDot.textContent = `${data[0].secondStage.blueCards}`;
  //Therd
  stageThreeGreenDot.textContent = `${data[0].thirdStage.greenCards}`;
  stageThreeBrownDot.textContent = `${data[0].thirdStage.brownCards}`;
  stageThreeBlueDot.textContent = `${data[0].thirdStage.blueCards}`;
  console.log(data);
}

getAncient(ancients);
getStages(ancientsData);
