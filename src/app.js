import "./style.css";

function generateNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numRandomizer = Math.floor(Math.random() * numbers.length);

  return numbers[numRandomizer];
}

function generateSuit() {
  let suit = ["♥", "♦", "♠", "♣"];
  let suitRandomizer = Math.floor(Math.random() * suit.length);

  return suit[suitRandomizer];
}

function generateCard() {
  let suit = generateSuit();
  let number = generateNumber();

  if (suit === "♥" || suit === "♦") {
    document.querySelector(".topIcon").classList.add("redSuit");
    document.querySelector(".bottomIcon").classList.add("redSuit");
  } else {
    document.querySelector(".topIcon").classList.remove("redSuit");
    document.querySelector(".bottomIcon").classList.remove("redSuit");
  }

  document.querySelector(".topIcon").innerHTML = suit;
  document.querySelector(".bottomIcon").innerHTML = suit;
  document.querySelector(".number").innerHTML = number;
}

window.onload = generateCard();
document.querySelector("button").addEventListener("click", generateCard);
setInterval(generateCard, 10000);
