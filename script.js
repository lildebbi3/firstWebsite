function getRandomNumber(min, max) {
  let n1 = max - min + 1;
  let n2 = Math.random() * n1;
  let result = Math.floor(n2) + min;
  return result;
}

function createArrayofNumbers(start, end) {
  let myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}

let memeCount = 10; //number of files in codeMemes
let numbersArray = createArrayofNumbers(1, memeCount);
var i = 0;

function memeGenerator() {
  //resets memes shown
  if (numbersArray.length == 0) {
    alert("You have gone through all the memes.");
    console.log("finished all memes\n--reseting--");
    numbersArray = createArrayofNumbers(1, memeCount);
  }
  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  numbersArray.splice(randomIndex, 1);
  var terminate = document.getElementById("meme" + i);
  i++;
  var yolo = document.getElementById('yolo');
  //creates new image
  var x = document.createElement("IMG");
  x.setAttribute("id", "meme" + i);
  x.setAttribute("src", "codeMemes/meme" + [randomNumber] + ".jpg");
  x.setAttribute("class", "meme");
  x.setAttribute("border", "2px solid black")
  yolo.appendChild(x);
  console.log(x);
  yolo.removeChild(terminate); //deletes old image
}
var topnav;
var sticky;

window.onscroll = function () {
  topnav = document.getElementById("topnav");
  sticky = topnav.offsetTop;
  scrollStay();
};

function scrollStay() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
  }
}
