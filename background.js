const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImages}`;

document.body.appendChild(bgImage);
