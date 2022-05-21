const sentences = [
  {
    stce: "this is first",
    name: "first",
  },
  {
    stce: "this is second",
    name: "second",
  },
  {
    stce: "this is third",
    name: "third",
  },
  {
    stce: "this is fourth",
    name: "fourth",
  },
  {
    stce: "this is fifth",
    name: "fifth",
  },
  {
    stce: "this is sixth",
    name: "sixth",
  },
];

sentence = document.querySelector("#sentence span:first-child");
num = document.querySelector("#sentence span:last-child");

const todaySentence = sentences[Math.floor(Math.random() * sentences.length)];

sentence.innerText = todaySentence.stce;
num.innerText = todaySentence.name;
