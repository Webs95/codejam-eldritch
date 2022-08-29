import './style.scss'; // import styles
import ancientsData from './data/ancients';
import cardsDataBlue from './data/mythicCards/blue';
import cardsDataBrown from './data/mythicCards/brown';
import cardsDataGreen from './data/mythicCards/green';

// Variables
const lastCard = document.querySelector('.last-card');
const deck = document.querySelector('.deck');
const ancientsWrapper = document.querySelector('.ancienst-wrapper');
const nameAncient = document.querySelector('.name-ancient');
const difficultyBtnsWrapper = document.querySelector('.difficult-wrapper');
const shuffleBtnWrapper = document.querySelector('.shuffle-wrapper');
const deckWrapper = document.querySelector('.deck-wrapper');
const mixDeck = document.querySelector('.mix-deck');
const restart = document.querySelector('.restart');
// Stages Fathers
const firstStage = document.querySelector('.first-stage');
const secondStage = document.querySelector('.second-stage');
const thirdStage = document.querySelector('.third-stage');

// Sort Cards
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
// Done deck
let doneDeck = {
  firstStage: [],
  secondStage: [],
  thirdStage: [],
};
let colorLastCard = '';

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
function getStages(data, selectedAncient) {
  currentAncient = selectedAncient;
  let ancient = data.filter((el) => el.id === `${selectedAncient}`);
  nameAncient.textContent = ancient[0].name;
  // Set first stage
  firstStage.children[0].textContent = ancient[0].firstStage.greenCards;
  firstStage.children[1].textContent = ancient[0].firstStage.brownCards;
  firstStage.children[2].textContent = ancient[0].firstStage.blueCards;
  // Set second stage
  secondStage.children[0].textContent = ancient[0].secondStage.greenCards;
  secondStage.children[1].textContent = ancient[0].secondStage.brownCards;
  secondStage.children[2].textContent = ancient[0].secondStage.blueCards;
  // Set third stage
  thirdStage.children[0].textContent = ancient[0].thirdStage.greenCards;
  thirdStage.children[1].textContent = ancient[0].thirdStage.brownCards;
  thirdStage.children[2].textContent = ancient[0].thirdStage.blueCards;
}
// Get random number
function getRandomNum(maxValue) {
  return Math.floor(Math.random() * maxValue);
}
// Set tracker vars on click
ancientsWrapper.addEventListener('click', (e) => {
  difficultyBtnsWrapper.style.visibility = 'visible';

  let target = e.target.id;

  setFirstStage(ancientsData, sortedCards[1], target);
  setSecondStage(ancientsData, sortedCards[1], target);
  setThirdStage(ancientsData, sortedCards[1], target);
  console.log(`Current deck 👇`);
  console.log(doneDeck);

  if (target === 'azathoth') {
    getStages(ancientsData, target);
    // Toggle active style
    azathoth.classList.add('ancienst__card-active');
    cthulhu.classList.remove('ancienst__card-active');
    iogSothoth.classList.remove('ancienst__card-active');
    shubNiggurath.classList.remove('ancienst__card-active');
    return;
  }
  if (target === 'cthulhu') {
    getStages(ancientsData, target);
    // Toggle active style
    azathoth.classList.remove('ancienst__card-active');
    cthulhu.classList.add('ancienst__card-active');
    iogSothoth.classList.remove('ancienst__card-active');
    shubNiggurath.classList.remove('ancienst__card-active');
    return;
  }
  if (target === 'iogSothoth') {
    getStages(ancientsData, target);
    // Toggle active style
    azathoth.classList.remove('ancienst__card-active');
    cthulhu.classList.remove('ancienst__card-active');
    iogSothoth.classList.add('ancienst__card-active');
    shubNiggurath.classList.remove('ancienst__card-active');
    return;
  }
  if (target === 'shubNiggurath') {
    getStages(ancientsData, target);
    // Toggle active style
    azathoth.classList.remove('ancienst__card-active');
    cthulhu.classList.remove('ancienst__card-active');
    iogSothoth.classList.remove('ancienst__card-active');
    shubNiggurath.classList.add('ancienst__card-active');
    return;
  }
});

let currentAncient = '';

// Prepare stages
function setFirstStage(tarckerData, shuffleDeck, currAnc) {
  let currIndex = 0;
  if (currAnc === 'azathoth') {
    currIndex = 0;
  } else if (currAnc === 'cthulhu') {
    currIndex = 1;
  } else if (currAnc === 'iogSothoth') {
    currIndex = 2;
  } else if (currAnc === 'shubNiggurath') {
    currIndex = 3;
  }
  // How much cards we needed for first stage
  // Green Cards
  let firstStageGreenCardsMaxVal = tarckerData[currIndex].firstStage.greenCards;
  let firstStageGreenCardsDeck =
    firstStageGreenCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.green.splice()
      : shuffleDeck.shuffleColorCards.green.splice(-firstStageGreenCardsMaxVal);
  // Brown Cards
  let firstStageBrownCardsMaxVal = tarckerData[currIndex].firstStage.brownCards;
  let firstStageBrownCardsDeck =
    firstStageBrownCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.brown.splice()
      : shuffleDeck.shuffleColorCards.brown.splice(-firstStageBrownCardsMaxVal);
  // Blue Cards
  let firstStageBlueCardsMaxVal = tarckerData[currIndex].firstStage.blueCards;
  let firstStageBlueCardsDeck =
    firstStageBlueCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.blue.splice()
      : shuffleDeck.shuffleColorCards.blue.splice(-firstStageBlueCardsMaxVal);

  let firstStageDeck = [
    ...firstStageGreenCardsDeck,
    ...firstStageBrownCardsDeck,
    ...firstStageBlueCardsDeck,
  ];

  return (doneDeck.firstStage = shuffleArray(firstStageDeck));
}
function setSecondStage(tarckerData, shuffleDeck, currAnc) {
  let currIndex = 0;
  if (currAnc === 'azathoth') {
    currIndex = 0;
  } else if (currAnc === 'cthulhu') {
    currIndex = 1;
  } else if (currAnc === 'iogSothoth') {
    currIndex = 2;
  } else if (currAnc === 'shubNiggurath') {
    currIndex = 3;
  }
  // How much cards we needed for first stage
  // Green Cards
  let greenCardsMaxVal = tarckerData[currIndex].secondStage.greenCards;
  let greenCardsDeck =
    greenCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.green.splice()
      : shuffleDeck.shuffleColorCards.green.splice(-greenCardsMaxVal);
  // Brown Cards
  let brownCardsMaxVal = tarckerData[currIndex].secondStage.brownCards;
  let brownCardsDeck =
    brownCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.brown.splice()
      : shuffleDeck.shuffleColorCards.brown.splice(-brownCardsMaxVal);
  // Blue Cards
  let blueCardsMaxVal = tarckerData[currIndex].secondStage.blueCards;
  let blueCardsDeck =
    blueCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.blue.splice()
      : shuffleDeck.shuffleColorCards.blue.splice(-blueCardsMaxVal);

  let secondStageDeck = [
    ...greenCardsDeck,
    ...brownCardsDeck,
    ...blueCardsDeck,
  ];

  return (doneDeck.secondStage = shuffleArray(secondStageDeck));
}
function setThirdStage(tarckerData, shuffleDeck, currAnc) {
  let currIndex = 0;
  if (currAnc === 'azathoth') {
    currIndex = 0;
  } else if (currAnc === 'cthulhu') {
    currIndex = 1;
  } else if (currAnc === 'iogSothoth') {
    currIndex = 2;
  } else if (currAnc === 'shubNiggurath') {
    currIndex = 3;
  }
  // How much cards we needed for first stage
  // Green Cards
  let greenCardsMaxVal = tarckerData[currIndex].thirdStage.greenCards;
  let greenCardsDeck =
    greenCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.green.splice()
      : shuffleDeck.shuffleColorCards.green.splice(-greenCardsMaxVal);
  // Brown Cards
  let brownCardsMaxVal = tarckerData[currIndex].thirdStage.brownCards;
  let brownCardsDeck =
    brownCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.brown.splice()
      : shuffleDeck.shuffleColorCards.brown.splice(-brownCardsMaxVal);
  // Blue Cards
  let blueCardsMaxVal = tarckerData[currIndex].thirdStage.blueCards;
  let blueCardsDeck =
    blueCardsMaxVal === 0
      ? shuffleDeck.shuffleColorCards.blue.splice()
      : shuffleDeck.shuffleColorCards.blue.splice(-blueCardsMaxVal);

  let therdStageDeck = [...greenCardsDeck, ...brownCardsDeck, ...blueCardsDeck];

  return (doneDeck.thirdStage = shuffleArray(therdStageDeck));
}

let concatMiniDeck;

let lastCardMiniDeck;

let trackerData = [];

function createDataForTracker(dataAnc, currAnc) {
  let currentIndex = 0;
  if (currAnc === 'azathoth') currentIndex = 0;
  if (currAnc === 'cthulhu') currentIndex = 1;
  if (currAnc === 'iogSothoth') currentIndex = 2;
  if (currAnc === 'shubNiggurath') currentIndex = 3;

  trackerData = [
    [
      parseInt(dataAnc[currentIndex].firstStage.greenCards, 10),
      parseInt(dataAnc[currentIndex].firstStage.brownCards, 10),
      parseInt(dataAnc[currentIndex].firstStage.blueCards, 10),
    ],
    [
      parseInt(dataAnc[currentIndex].secondStage.greenCards, 10),
      parseInt(dataAnc[currentIndex].secondStage.brownCards, 10),
      parseInt(dataAnc[currentIndex].secondStage.blueCards, 10),
    ],
    [
      parseInt(dataAnc[currentIndex].thirdStage.greenCards, 10),
      parseInt(dataAnc[currentIndex].thirdStage.brownCards, 10),
      parseInt(dataAnc[currentIndex].thirdStage.blueCards, 10),
    ],
  ];
}

let indexOftData = 0;

function minusCardsFromDacker(tData, cardColor = '') {
  let stage = firstStage;
  let sum = 0;

  tData[indexOftData].forEach((num) => (sum += num));

  if (sum === 0) {
    indexOftData += 1;

    tData[indexOftData].forEach((num) => {
      sum += num;
    });
  }

  if (indexOftData === 1) stage = secondStage;

  if (indexOftData === 2) stage = thirdStage;

  if (cardColor === 'green')
    stage.children[0].textContent = tData[indexOftData][0] -= 1;

  if (cardColor === 'brown')
    stage.children[1].textContent = tData[indexOftData][1] -= 1;

  if (cardColor === 'blue')
    stage.children[2].textContent = tData[indexOftData][2] -= 1;
}

function getLastCard(miniDeck) {
  lastCardMiniDeck = miniDeck.pop();
  colorLastCard = lastCardMiniDeck.color;
  console.log(`
  🎴 Cards in deck: ${miniDeck.length};
  🃏 Current card: ${lastCardMiniDeck.id} ${lastCardMiniDeck.difficulty};
  `);
  miniDeck.length === 0
    ? (deck.style.opacity = '0.5')
    : (lastCard.style.backgroundImage = `url(${lastCardMiniDeck.cardFace})`);
}

mixDeck.addEventListener('click', () => {
  createDataForTracker(ancientsData, currentAncient);
  return (concatMiniDeck = [
    ...doneDeck.firstStage,
    ...doneDeck.secondStage,
    ...doneDeck.thirdStage,
  ].reverse());
});

deck.addEventListener('click', () => {
  getLastCard(concatMiniDeck);
  minusCardsFromDacker(trackerData, colorLastCard);
});

difficultyBtnsWrapper.addEventListener('click', () => {
  shuffleBtnWrapper.style.visibility = 'visible';
});

restart.addEventListener('click', () => window.location.reload());

shuffleBtnWrapper.addEventListener('click', () => {
  difficultyBtnsWrapper.style = 'hidden';
  shuffleBtnWrapper.style = 'hidden';
  deckWrapper.style.visibility = 'visible';
  restart.style.visibility = 'visible';
});
