import './style.scss'; // import styles
import ancients from './assets/Ancients/index';
import ancientsData from './data/ancients';
// Variables
const ancientsWrapper = document.querySelector('.ancienst-wrapper');
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

function getStages(event, data) {
  if (event.target.classList.contains('ancienst__card-first')) {
    // First
    stageOneGreenDot.textContent = `${data[0].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${data[0].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${data[0].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${data[0].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${data[0].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${data[0].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${data[0].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${data[0].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${data[0].thirdStage.blueCards}`;
  } else if (event.target.classList.contains('ancienst__card-second')) {
    // First
    stageOneGreenDot.textContent = `${data[1].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${data[1].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${data[1].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${data[1].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${data[1].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${data[1].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${data[1].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${data[1].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${data[1].thirdStage.blueCards}`;
  } else if (event.target.classList.contains('ancienst__card-therd')) {
    // First
    stageOneGreenDot.textContent = `${data[2].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${data[2].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${data[2].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${data[2].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${data[2].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${data[2].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${data[2].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${data[2].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${data[2].thirdStage.blueCards}`;
  } else if (event.target.classList.contains('ancienst__card-fourth')) {
    // First
    stageOneGreenDot.textContent = `${data[3].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${data[3].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${data[3].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${data[3].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${data[3].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${data[3].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${data[3].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${data[3].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${data[3].thirdStage.blueCards}`;
  }
}
ancientsWrapper.addEventListener('click', (e) => getStages(e, ancientsData));

getAncient(ancients);
