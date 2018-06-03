// Array.prototype.sample = function(){
//   return this[Math.floor(Math.random()*this.length)];
// }

// function keyDownTextField3(e) {
//   const keyCode = e.keyCode;
//   const obstacle = [13,14,17,21,23,24,26,27,36,41,43,44,
//   47,53,54,63,64,68,69,71,72,73,74,77,88,91,93,94]

//   let user = parseInt(document.querySelector(".active").id);
//   let dragon1 = parseInt(document.querySelector(".active2").id);
//   if (user === dragon1){
//     document.getElementById("story2").classList.remove("display-none");
//     document.getElementById("story-box").classList.remove("display-none");
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(".active2").classList.remove("active2");
//     document.querySelector(".active3").classList.remove("active3");


//   }




//   // right
//   if (keyCode === 39) {
//     let idNum = parseInt(document.querySelector(".active").id);

//     document.querySelector(".active").classList.remove("active");

//     if (idNum % 10 === 9) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     if (obstacle.includes(idNum + 1)) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     else {
//       document.getElementById(idNum).classList.remove("flip");
//       idNum += 1;
//       document.getElementById(idNum).classList.add("active");
//       document.getElementById(idNum).classList.add("flip");
//     }
//   }
//   // left
//   if (keyCode === 37) {
//     let idNum = parseInt(document.querySelector(".active").id);


//     document.querySelector(".active").classList.remove("active");


//     if (idNum % 10 === 1) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     if (obstacle.includes(idNum - 1)) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     else {
//       idNum -= 1;
//       document.getElementById(idNum).classList.add("active");
//       document.getElementById(idNum).classList.remove("flip");
//     }
//   }
//   // up
//   if (keyCode === 40) {
//     let idNum = parseInt(document.querySelector(".active").id);
//     document.querySelector(".active").classList.remove("active");

//     if (idNum > 90) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     if (obstacle.includes(idNum + 10)) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     else {
//       idNum2 = idNum + 10;
//       document.getElementById(idNum2).classList.add("active");

//       if (document.getElementById(idNum).classList.contains("flip")){
//         document.getElementById(idNum2).classList.add("flip");
//         document.getElementById(idNum).classList.remove("flip");
//       }

//     }


//   }
//   // down
//   if (keyCode === 38) {
//     let idNum = parseInt(document.querySelector(".active").id);
//     document.querySelector(".active").classList.remove("active");

//     if (idNum < 20) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     if (obstacle.includes(idNum - 10)) {
//       document.getElementById(idNum).classList.add("active");
//     }
//     else {
//       idNum2 = idNum - 10;
//       document.getElementById(idNum2).classList.add("active");

//       if (document.getElementById(idNum).classList.contains("flip")){
//         document.getElementById(idNum2).classList.add("flip");
//         document.getElementById(idNum).classList.remove("flip");
//       }
//     }
//   }
//     //check fail
//     if (document.querySelector(".active").id === "37"){
//       document.getElementById("37").classList.add("fire");
//       let count = document.querySelectorAll(".fire").length;

//       if (count === 3){
//         alert("You win");
//       }
//     }
//     if (document.querySelector(".active").id === "81"){
//       document.getElementById("81").classList.add("fire");
//       let count = document.querySelectorAll(".fire").length;

//       if (count === 3){
//         alert("You win");
//       }
//     }
//     if (document.querySelector(".active").id === "79"){
//       document.getElementById("79").classList.add("fire");
//       let count = document.querySelectorAll(".fire").length;

//       if (count === 3){
//         alert("You win");
//       }
//     }


//   }

// // --------------------------------------------------------------- //

// function keyDownTextField4() {


//   sampleNum = [10,10,-10,-10,-10,1,1,-1,-1,-1].sample();
//   const obstacle = [17,21,26,27,36,41,
//   47,64,68,69,71,72,77,88,91]
//   let user = parseInt(document.querySelector(".active").id);
//   let dragon1 = parseInt(document.querySelector(".active2").id);

//   if (user === dragon1){
//     document.getElementById("story2").classList.remove("display-none");
//     document.getElementById("story-box").classList.remove("display-none");
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(".active2").classList.remove("active2");
//     document.querySelector(".active3").classList.remove("active3");


//   }



//   // right
//   if (sampleNum === 1) {
//     let idNum = parseInt(document.querySelector(".active2").id);
//     document.querySelector(".active2").classList.remove("active2");

//     if (idNum % 10 === 9) {
//       document.getElementById(idNum).classList.add("active2");
//     }
//     if (obstacle.includes(idNum + 1)) {
//       document.getElementById(idNum).classList.add("active2");
//     }
//     else {
//       idNum += 1;
//       document.getElementById(idNum).classList.add("active2");
//       document.getElementById(idNum).classList.remove("flip");
//     }

//   }
//   // left
//   if (sampleNum === -1) {
//     let idNum = parseInt(document.querySelector(".active2").id);
//     document.querySelector(".active2").classList.remove("active2");

//     if (idNum % 10 === 1) {
//       document.getElementById(idNum).classList.add("active2");
//     }
//     if (obstacle.includes(idNum - 1)) {
//       document.getElementById(idNum).classList.add("active2");
//     }
//     else {
//       document.getElementById(idNum).classList.remove("flip");
//       idNum -= 1;

//       document.getElementById(idNum).classList.add("active2");
//       document.getElementById(idNum).classList.add("flip");
//     }
//   }
// // up
// if (sampleNum === 10) {
//   let idNum = parseInt(document.querySelector(".active2").id);
//   document.querySelector(".active2").classList.remove("active2");

//   if (idNum > 90) {
//     document.getElementById(idNum).classList.add("active2");
//   }
//   if (obstacle.includes(idNum + 10)) {
//     document.getElementById(idNum).classList.add("active2");

//   }
//   else {

//     idNum += 10;
//     document.getElementById(idNum).classList.add("active2");

//   }
// }
//   // down
//   if (sampleNum === -10) {
//     let idNum = parseInt(document.querySelector(".active2").id);
//     document.querySelector(".active2").classList.remove("active2");

//     if (idNum < 20) {
//       document.getElementById(idNum).classList.add("active2");
//     }
//     if (obstacle.includes(idNum - 10)) {
//       document.getElementById(idNum).classList.add("active2");
//     }
//     else {
//       idNum -= 10;
//       document.getElementById(idNum).classList.add("active2");
//     }
//   }


// }

// function keyDownTextField5() {


//   sampleNum = [10,-10,,1,-1,].sample();
//   const obstacle = [17,21,26,27,36,41,
//   47,64,68,69,71,72,77,88,91]
//   let user = parseInt(document.querySelector(".active").id);
//   let dragon2 = parseInt(document.querySelector(".active3").id);

//   if (user === dragon2){
//     document.getElementById("story2").classList.remove("display-none");
//     document.getElementById("story-box").classList.remove("display-none");
//     document.querySelector(".active").classList.remove("active");
//     document.querySelector(".active2").classList.remove("active2");
//     document.querySelector(".active3").classList.remove("active3");


//   }

//   // right
//   if (sampleNum === 1) {
//     let idNum = parseInt(document.querySelector(".active3").id);
//     document.querySelector(".active3").classList.remove("active3");

//     if (idNum % 10 === 9) {
//       document.getElementById(idNum).classList.add("active3");
//     }
//     if (obstacle.includes(idNum + 1)) {
//       document.getElementById(idNum).classList.add("active3");
//     }
//     else {
//       idNum += 1;
//       document.getElementById(idNum).classList.add("active3");
//       document.getElementById(idNum).classList.remove("flip");
//     }
//   }
//   // left
//   if (sampleNum === -1) {
//     let idNum = parseInt(document.querySelector(".active3").id);
//     document.querySelector(".active3").classList.remove("active3");

//     if (idNum % 10 === 1) {
//       document.getElementById(idNum).classList.add("active3");
//     }
//     if (obstacle.includes(idNum - 1)) {
//       document.getElementById(idNum).classList.add("active3");
//     }
//     else {
//       document.getElementById(idNum).classList.remove("flip");
//       idNum -= 1;

//       document.getElementById(idNum).classList.add("active3");
//       document.getElementById(idNum).classList.add("flip");
//     }
//   }
// // up
// if (sampleNum === 10) {
//   let idNum = parseInt(document.querySelector(".active3").id);
//   document.querySelector(".active3").classList.remove("active3");

//   if (idNum > 90) {
//     document.getElementById(idNum).classList.add("active3");
//   }
//   if (obstacle.includes(idNum + 10)) {
//     document.getElementById(idNum).classList.add("active3");
//   }
//   else {
//     idNum += 10;
//     document.getElementById(idNum).classList.add("active3");
//   }
// }
//   // down
//   if (sampleNum === -10) {
//     let idNum = parseInt(document.querySelector(".active3").id);
//     document.querySelector(".active3").classList.remove("active3");

//     if (idNum < 20) {
//       document.getElementById(idNum).classList.add("active3");
//     }
//     if (obstacle.includes(idNum - 10)) {
//       document.getElementById(idNum).classList.add("active3");
//     }
//     else {
//       idNum -= 10;
//       document.getElementById(idNum).classList.add("active3");
//     }
//   }


// }


// function start2(){

//   document.getElementById("story4").classList.add("display-none");
//   document.getElementById("story-box").classList.add("display-none");
//   setTimeout(function(){

//     document.getElementById("11").classList.add("active");
//     document.getElementById("99").classList.add("active2");
//     document.getElementById("19").classList.add("active3");
//     document.addEventListener("keyup", keyDownTextField3, false);
//     var interval = setInterval(keyDownTextField4, 300);
//     var interval = setInterval(keyDownTextField5, 300);

//   }, 2000);

// }


// document.getElementById("btn4").addEventListener("click", start2, false);

// function restart2(){
//   location.reload();
// }



// document.getElementById("btn2").addEventListener("click", restart2, false);



// const obstacle = [16, 21, 23, 27, 33, 36, 41, 47, 55, 75, 76, 78, 83, 84, 86, 91, 93, 94];
