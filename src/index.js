import './style.scss'; // import styles
import ancients from './assets/Ancients/index';
import ancientsData from './data/ancients';
import cardsDataBlue from './data/mythicCards/blue';
import cardsDataBrown from './data/mythicCards/brown';
import cardsDataGreen from './data/mythicCards/green';

// Variables
const lastCard = document.querySelector('.last-card');
const deck = document.querySelector('.deck');
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
// Sort Cards Difficulty
const sortedCards = [
  {
    difficultyCards: {
      easy: shuffleArray(
        sortCardsDifficultyEasy(cardsDataBlue, cardsDataBrown, cardsDataGreen)
      ),
      medium: shuffleArray(
        sortCardsDifficultyMedium(cardsDataBlue, cardsDataBrown, cardsDataGreen)
      ),
      hard: shuffleArray(
        sortCardsDifficultyHard(cardsDataBlue, cardsDataBrown, cardsDataGreen)
      ),
    },
  },
  {
    shuffleColorCards: {
      blue: shuffleArray(cardsDataBlue),
      brown: shuffleArray(cardsDataBrown),
      green: shuffleArray(cardsDataGreen),
    },
  },
];
// Render ancients on page
function getAncient(data) {
  firstCard.style.backgroundImage = `url(${data.azathoth})`;
  secondCard.style.backgroundImage = `url(${data.cthulhu})`;
  therdCard.style.backgroundImage = `url(${data.iogSothoth})`;
  fourthCard.style.backgroundImage = `url(${data.shubNiggurath})`;
}
// Sort the deck by Easy difficulty
function sortCardsDifficultyEasy(blue, brown, green) {
  let easyCards = [];

  blue.map((el) => {
    if (el.difficulty === 'easy') easyCards.push(el);
  });
  brown.map((el) => {
    if (el.difficulty === 'easy') easyCards.push(el);
  });
  green.map((el) => {
    if (el.difficulty === 'easy') easyCards.push(el);
  });
  return easyCards;
}
// Sort the deck by Medium difficulty
function sortCardsDifficultyMedium(blue, brown, green) {
  let mediumCards = [];
  blue.map((el) => {
    if (el.difficulty === 'normal') mediumCards.push(el);
  });
  brown.map((el) => {
    if (el.difficulty === 'normal') mediumCards.push(el);
  });
  green.map((el) => {
    if (el.difficulty === 'normal') mediumCards.push(el);
  });
  return mediumCards;
}
// Sort the deck by Hard difficulty
function sortCardsDifficultyHard(blue, brown, green) {
  let hardCards = [];

  blue.map((el) => {
    if (el.difficulty === 'hard') hardCards.push(el);
  });
  brown.map((el) => {
    if (el.difficulty === 'hard') hardCards.push(el);
  });
  green.map((el) => {
    if (el.difficulty === 'hard') hardCards.push(el);
  });
  return hardCards;
}
// Shuffle the deck
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
// Get info for tracker
let ancientsDataClone;
function getStages(event, data) {
  // ПЕРЕПИСАТЬ
  ancientsDataClone = JSON.parse(JSON.stringify(data));
  if (event.target.classList.contains('ancienst__card-first')) {
    // First
    stageOneGreenDot.textContent = `${ancientsDataClone[0].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${ancientsDataClone[0].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${ancientsDataClone[0].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${ancientsDataClone[0].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${ancientsDataClone[0].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${ancientsDataClone[0].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${ancientsDataClone[0].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${ancientsDataClone[0].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${ancientsDataClone[0].thirdStage.blueCards}`;
  } else if (event.target.classList.contains('ancienst__card-second')) {
    // First
    stageOneGreenDot.textContent = `${ancientsDataClone[1].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${ancientsDataClone[1].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${ancientsDataClone[1].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${ancientsDataClone[1].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${ancientsDataClone[1].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${ancientsDataClone[1].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${ancientsDataClone[1].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${ancientsDataClone[1].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${ancientsDataClone[1].thirdStage.blueCards}`;
  } else if (event.target.classList.contains('ancienst__card-therd')) {
    // First
    stageOneGreenDot.textContent = `${ancientsDataClone[2].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${ancientsDataClone[2].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${ancientsDataClone[2].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${ancientsDataClone[2].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${ancientsDataClone[2].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${ancientsDataClone[2].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${ancientsDataClone[2].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${ancientsDataClone[2].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${ancientsDataClone[2].thirdStage.blueCards}`;
  } else if (event.target.classList.contains('ancienst__card-fourth')) {
    // First
    stageOneGreenDot.textContent = `${ancientsDataClone[3].firstStage.greenCards}`;
    stageOneBrownDot.textContent = `${ancientsDataClone[3].firstStage.brownCards}`;
    stageOneBlueDot.textContent = `${ancientsDataClone[3].firstStage.blueCards}`;
    // Second
    stageTwoGreenDot.textContent = `${ancientsDataClone[3].secondStage.greenCards}`;
    stageTwoBrownDot.textContent = `${ancientsDataClone[3].secondStage.brownCards}`;
    stageTwoBlueDot.textContent = `${ancientsDataClone[3].secondStage.blueCards}`;
    // Therd
    stageThreeGreenDot.textContent = `${ancientsDataClone[3].thirdStage.greenCards}`;
    stageThreeBrownDot.textContent = `${ancientsDataClone[3].thirdStage.brownCards}`;
    stageThreeBlueDot.textContent = `${ancientsDataClone[3].thirdStage.blueCards}`;
  }
}
// Get random number
function getRandomNum(maxValue) {
  return Math.floor(Math.random() * maxValue);
}
// Set tracker vars on click
ancientsWrapper.addEventListener('click', (e) => {
  getStages(e, ancientsData);
  if (e.target.classList.contains('ancienst__card-first')) {
  }
});

// Done deck!
let doneDeck = {
  firstStage: shuffleArray(firstStageAzatoth(ancientsData, sortedCards[1])),
  secondStage: shuffleArray(secondStageAzatoth(ancientsData, sortedCards[1])),
  therdStage: shuffleArray(therdStageAzatoth(ancientsData, sortedCards[1])),
};
// Prepare stages
function firstStageAzatoth(tarckerData, shuffleDeck) {
  // How much curds we needed for first stage
  // Green Cards
  let firstStageGreenCardsMaxVal = tarckerData[0].firstStage.greenCards;
  let firstStageGreenCardsDeck = shuffleDeck.shuffleColorCards.green.splice(
    -firstStageGreenCardsMaxVal
  );
  // Brown Cards
  let firstStageBrownCardsMaxVal = tarckerData[0].firstStage.brownCards;
  let firstStageBrownCardsDeck = shuffleDeck.shuffleColorCards.brown.splice(
    -firstStageBrownCardsMaxVal
  );
  // Blue Cards
  let firstStageBlueCardsMaxVal = tarckerData[0].firstStage.blueCards;
  let firstStageBlueCardsDeck = shuffleDeck.shuffleColorCards.blue.splice(
    -firstStageBlueCardsMaxVal
  );

  let firstStageDeck = [
    ...firstStageGreenCardsDeck,
    ...firstStageBrownCardsDeck,
    ...firstStageBlueCardsDeck,
  ];

  return firstStageDeck;
}
function secondStageAzatoth(tarckerData, shuffleDeck) {
  // How much curds we needed for first stage
  // Green Cards
  let greenCardsMaxVal = tarckerData[0].secondStage.greenCards;
  let greenCardsDeck = shuffleDeck.shuffleColorCards.green.splice(
    -greenCardsMaxVal
  );
  // Brown Cards
  let brownCardsMaxVal = tarckerData[0].secondStage.brownCards;
  let brownCardsDeck = shuffleDeck.shuffleColorCards.brown.splice(
    -brownCardsMaxVal
  );
  // Blue Cards
  let blueCardsMaxVal = tarckerData[0].secondStage.blueCards;
  let blueCardsDeck = shuffleDeck.shuffleColorCards.blue.splice(
    -blueCardsMaxVal
  );

  let secondStageDeck = [
    ...greenCardsDeck,
    ...brownCardsDeck,
    ...blueCardsDeck,
  ];

  return secondStageDeck;
}
function therdStageAzatoth(tarckerData, shuffleDeck) {
  // How much curds we needed for first stage
  // Green Cards
  let greenCardsMaxVal = tarckerData[0].thirdStage.greenCards;
  let greenCardsDeck = shuffleDeck.shuffleColorCards.green.splice(
    -greenCardsMaxVal
  );
  // Brown Cards
  let brownCardsMaxVal = tarckerData[0].thirdStage.brownCards;
  let brownCardsDeck = shuffleDeck.shuffleColorCards.brown.splice(
    -brownCardsMaxVal
  );
  // Blue Cards
  let blueCardsMaxVal = tarckerData[0].thirdStage.blueCards;
  let blueCardsDeck =
    blueCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.blue.splice()
      : shuffleDeck.shuffleColorCards.blue.splice(-blueCardsMaxVal);
  // console.log('Max laues');
  // console.log(greenCardsMaxVal, brownCardsMaxVal, blueCardsMaxVal);
  // console.log('Decks');
  // console.log(greenCardsDeck, brownCardsDeck, blueCardsDeck);
  let therdStageDeck = [...greenCardsDeck, ...brownCardsDeck, ...blueCardsDeck];

  return therdStageDeck;
}

let concatMiniDeck = [
  ...doneDeck.firstStage,
  ...doneDeck.secondStage,
  ...doneDeck.therdStage,
].reverse();
let lastCardMiniDeck;
function getLastCard(miniDeck, dataClone) {
  lastCardMiniDeck = miniDeck.pop();
  const minusFirstTracker = () => {
    // Функция, которая отрабоатет после конца первого этапа
  };
  if (lastCardMiniDeck.color === 'green' && stageOneGreenDot.textContent != 0) {
    stageOneGreenDot.textContent -= 1
    if (stageOneGreenDot.textContent === 0) console.log('ZERO');
  } else if (
    lastCardMiniDeck.color === 'brown' &&
    stageOneBrownDot.textContent != 0 // !!! Сделать внешний массив со значениями трекера поэтапно и минусовать значения и выводить их уже от туда???
  ) {
    stageOneBrownDot.textContent -= 1; // Необходимо решить проблему отсчёта суммы карт в декере на каждом этапеэ
  } else if (
    lastCardMiniDeck.color === 'blue' &&
    stageOneBlueDot.textContent != 0
  ) {
    stageOneBlueDot.textContent -= 1;
  }
  lastCardMiniDeck === undefined
    ? (deck.style.backgroundImage = 'url()')
    : (lastCard.style.backgroundImage = `url(${lastCardMiniDeck.cardFace})`);
  console.log(lastCardMiniDeck.cardFace);
}

function minusCardsTracker(data) {
  console.log(data);
}

deck.addEventListener('click', () => {
  getLastCard(concatMiniDeck, ancientsDataClone);
  // minusCardsTracker(ancientsDataClone)
});

getAncient(ancients);
