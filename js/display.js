const displayList = [
  "🍜 중식",
  "🥘 찜닭",
  "🍕 피자",
  "🍔 버거",
  "🍲 한식",
  "🍣 일식",
];

display = document.querySelector("#display");

const displayText = displayList[Math.floor(Math.random() * displayList.length)];

display.innerText = `Today Lunch : ${displayText}`;
