'use strict';

const cardArray = [
  {
    name: 'burger',
    img: 'images/burger.jpg',
  },
  {
    name: 'fries',
    img: 'images/french-fries.png',
  },
  {
    name: 'hotdog',
    img: 'images/hot-dog.png',
  },
  {
    name: 'icecream',
    img: 'images/icecream.png',
  },
  {
    name: 'milk',
    img: 'images/milk.jpg',
  },
  {
    name: 'pizza',
    img: 'images/pizza.jpg',
  },
  {
    name: 'burger',
    img: 'images/burger.jpg',
  },
  {
    name: 'fries',
    img: 'images/french-fries.png',
  },
  {
    name: 'hotdog',
    img: 'images/hot-dog.png',
  },
  {
    name: 'icecream',
    img: 'images/icecream.png',
  },
  {
    name: 'milk',
    img: 'images/milk.jpg',
  },
  {
    name: 'pizza',
    img: 'images/pizza.jpg',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const imagesDisplayDiv = document.querySelector('.cards');
const score = document.querySelector('.score');
let cardChosenName = [];
let cardChosenId = [];
let endGame = [];
let count = 5;
score.innerText = count;
function diplayImage() {
  for (let i = 0; i < cardArray.length; i++) {
    const imageCards = document.createElement('img');
    imageCards.setAttribute('src', 'images/question.png');
    imageCards.setAttribute('data-id', i);
    imagesDisplayDiv.appendChild(imageCards);
    imageCards.addEventListener('click', flipCard);
  }
}
diplayImage();

function result() {
  const imgs = document.querySelectorAll('img');

  if (cardChosenName[0] === cardChosenName[1]) {
    imgs[cardChosenId[0]].setAttribute('src', 'images/white.jpg');
    imgs[cardChosenId[1]].setAttribute('src', 'images/white.jpg');
    imgs[cardChosenId[0]].removeEventListener('click', flipCard);
    imgs[cardChosenId[1]].removeEventListener('click', flipCard);
    endGame.push(cardChosenId);
    count += 5;
  } else {
    imgs[cardChosenId[0]].setAttribute('src', 'images/question.png');
    imgs[cardChosenId[1]].setAttribute('src', 'images/question.png');
    count -= 5;
    if (count <= 5) {
      count = 5;
    }
  }

  if (cardChosenId[0] === cardChosenId[1]) {
    alert('you click thesame card');
    imgs[cardChosenId[0]].setAttribute('src', 'images/question.png');
    imgs[cardChosenId[1]].setAttribute('src', 'images/question.png');
    imgs[cardChosenId[0]].addEventListener('click', flipCard);
    imgs[cardChosenId[1]].addEventListener('click', flipCard);
    count -= 5;
    if (count <= 5) {
      count = 5;
    }
    endGame = [];
    console.log(endGame);
  }
  score.innerText = count;

  if (endGame.length === cardArray.length / 2) {
    setTimeout(() => {
      alert('you found them all');
      endGame = [];
      location.reload();
    }, 150);
  }
  cardChosenName = [];
  cardChosenId = [];
}

function flipCard() {
  const imageId = this.getAttribute('data-id');
  const imageName = cardArray[imageId].name;
  cardChosenId.push(imageId);
  cardChosenName.push(imageName);
  this.setAttribute('src', cardArray[imageId].img);
  if (cardChosenName.length === 2) {
    setTimeout(result, 600);
  }
}
