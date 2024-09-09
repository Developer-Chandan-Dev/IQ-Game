// alert("Hey, Hi I'm active.")

// gameBox Logic start here
let color = document.getElementsByClassName("color");
let playPauseButton = document.getElementById("play");
let playPause = document.querySelector(".playPause");
let resetGame = document.getElementById("reset");
let count = 0;
let backGroundClass = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "crimson",
  "silver",
  "gray",
  "violet",
  "purple",
  "orange",
  "gold",
  "black",
  "white",
  "brown",
  "cyan",
];
let ColorName = [
  "RED",
  "GREEN",
  "BLUE",
  "YELLOW",
  "PURPLE",
  "WHITE",
  "BROWN",
  "ORANGE",
  "PINK",
  "CYAN",
  "SILVER",
  "GOLD",
  "BLACK",
  "YELLOW",
  "PURPLE",
  "WHITE",
  "CYAN",
  "SILVER",
  "RED",
  "GREEN",
  "BLUE",
  "VIOLET",
  "CRIMSON",
  "GOLD",
];
let textColor = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "crimson",
  "silver",
  "gray",
  "violet",
  "purple",
  "orange",
  "gold",
  "black",
  "white",
  "brown",
  "cyan",
];

function startSetInterval() {
  let startInterval = setInterval(() => {
    let randomBackgroundColor = Math.floor(Math.random() * 16);
    let randomColorName = Math.floor(Math.random() * 24);
    console.log(backGroundClass[randomBackgroundColor]);
    let randomtextColor = Math.floor(Math.random() * 16);
    console.log(textColor[randomtextColor]);
    let ActiveColor = document.getElementById(count);
    ActiveColor.classList.add("active");
    count++;
    if (count != 24) {
      for (a of color) {
        a.classList.remove("active");
        ActiveColor.classList.add("active");
      }
      for (b of color) {
        ActiveColor.classList.remove(
          "red",
          "green",
          "blue",
          "yellow",
          "pink",
          "crimson",
          "silver",
          "gray",
          "violet",
          "purple",
          "orange",
          "gold",
          "black",
          "white",
          "brown",
          "cyan"
        );
        ActiveColor.classList.add(backGroundClass[randomBackgroundColor]);
        ActiveColor.innerText = ColorName[randomColorName];
        //   ActiveColor.style.color = textColor[randomtextColor];
      }
    } else {
      count = 0;
      ActiveColor.classList.add("active");
      for (b of color) {
        ActiveColor.classList.remove(
          "red",
          "green",
          "blue",
          "yellow",
          "pink",
          "crimson",
          "silver",
          "gray",
          "violet",
          "purple",
          "orange",
          "gold",
          "black",
          "white",
          "brown",
          "cyan"
        );
        ActiveColor.classList.add(backGroundClass[randomBackgroundColor]);
        ActiveColor.innerText = ColorName[randomColorName];
        //   ActiveColor.style.color = textColor[randomtextColor];
      }
    }
  }, 1500);
  console.log(startInterval);
}
function startClearInterval(count){
  clearInterval(count);
}

// gameBox Logic end here

playPauseButton.addEventListener("click", () => {
  startSetInterval();
  document.querySelector("#play").disabled=true;
  document.querySelector("#pause").disabled=false;
  document.querySelector("#reset").disabled=false;
});
let pauseButton = document.getElementById("pause");
let count2 = 0;
pauseButton.addEventListener("click",()=>{
  count2++;
  console.log(count2)
  startClearInterval(count2);
  document.querySelector("#play").disabled=false;
  document.querySelector("#pause").disabled=true;
});
console.log(resetGame);
resetGame.addEventListener("click",()=>{
  window.location.reload();
})