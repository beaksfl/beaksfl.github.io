const gameList = [
  {
    hand: "✊",
    saying: "Lock",
  },
  {
    hand: "🤙",
    saying: "scissor",
  },
  {
    hand: "🖐",
    saying: "paper",
  },
];

hand = document.querySelector("#LockSF span:first-child");
saying = document.querySelector("#LockSF span:last-child");

const newGame = gameList[Math.floor(Math.random() * gameList.length)];

hand.innerText = newGame.hand;
saying.innerText = newGame.saying;
