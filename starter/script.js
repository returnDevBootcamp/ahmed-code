//Random number generator
var randomNumber = Math.floor(Math.random() * 20) + 1;
// Write code below
var score = 20;
var highscore = 0;
console.log(randomNumber);
// document.querySelector(".btn again").addEventListener("click", function () {
//   document.querySelector(".number").textContent = "number";
//   document.querySelector(".Body").style.background = "black";
//   document.querySelector(".message").textContent = "Start guessing...";
// });

document.querySelector(".check").addEventListener("click", function () {
  var input = document.querySelector(".guess").value;
  if (input == randomNumber) {
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".Body").style.background = "green";
    document.querySelector(".message").textContent = "You win";
    if (20 > highscore) {
      console.log((highscore = score));
      document.querySelector(".highscore").textContent = score;
    }
  }
  if (input != randomNumber) {
    score--;
    document.querySelector(".score").textContent = score;

    if (input > randomNumber) {
      document.querySelector(".message").textContent = "Too High";
    }

    if (input < randomNumber) {
      document.querySelector(".score").textContent = score;

      document.querySelector(".message").textContent = "Too Low";
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".number").textContent = "?";
    document.querySelector(".Body").style.background = "black";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".input").textContent = ``;
  });
});
