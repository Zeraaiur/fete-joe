Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

function keyDownTextField(e) {
  const keyCode = e.keyCode;





  // right
  if (keyCode === 39) {
    let idNum = parseInt(document.querySelector(".active").id);
    document.querySelector(".active").classList.remove("active");

    if (idNum % 10 === 9) {
      document.getElementById(idNum).classList.add("active");
    }
    else {
      idNum += 1;
      document.getElementById(idNum).classList.add("active");
    }
  }
  // left
  if (keyCode === 37) {
    let idNum = parseInt(document.querySelector(".active").id);
    document.querySelector(".active").classList.remove("active");

    if (idNum % 10 === 1) {
      document.getElementById(idNum).classList.add("active");
    }
    else {
      idNum -= 1;
      document.getElementById(idNum).classList.add("active");
    }
  }
  // up
  if (keyCode === 40) {
    let idNum = parseInt(document.querySelector(".active").id);
    document.querySelector(".active").classList.remove("active");

    if (idNum > 90) {
      document.getElementById(idNum).classList.add("active");
    }
    else {
      idNum += 10;
      document.getElementById(idNum).classList.add("active");
    }
  }
  // down
  if (keyCode === 38) {
    let idNum = parseInt(document.querySelector(".active").id);
    document.querySelector(".active").classList.remove("active");

    if (idNum < 20) {
      document.getElementById(idNum).classList.add("active");
    }
    else {
      idNum -= 10;
      document.getElementById(idNum).classList.add("active");
    }
  }
    //check fail
  let user = parseInt(document.querySelector(".active").id);
  let dragon1 = parseInt(document.querySelector(".active2").id);
  if (user === dragon1){
    alert("you lose")
  }

}

// --------------------------------------------------------------- //

function keyDownTextField2(e) {


    sampleNum = [10,-10,-10,1,-1,-1].sample();

  // right
  if (sampleNum === 1) {
    let idNum = parseInt(document.querySelector(".active2").id);
    document.querySelector(".active2").classList.remove("active2");

    if (idNum % 10 === 9) {
      document.getElementById(idNum).classList.add("active2");
    }
    else {
      idNum += 1;
      document.getElementById(idNum).classList.add("active2");
    }
  }
  // left
  if (sampleNum === -1) {
    let idNum = parseInt(document.querySelector(".active2").id);
    document.querySelector(".active2").classList.remove("active2");

    if (idNum % 10 === 1) {
      document.getElementById(idNum).classList.add("active2");
    }
    else {
      idNum -= 1;
      document.getElementById(idNum).classList.add("active2");
    }
  }
// up
  if (sampleNum === 10) {
    let idNum = parseInt(document.querySelector(".active2").id);
    document.querySelector(".active2").classList.remove("active2");

    if (idNum > 90) {
      document.getElementById(idNum).classList.add("active2");
    }
    else {
      idNum += 10;
      document.getElementById(idNum).classList.add("active2");
    }
  }
  // down
  if (sampleNum === -10) {
    let idNum = parseInt(document.querySelector(".active2").id);
    document.querySelector(".active2").classList.remove("active2");

    if (idNum < 20) {
      document.getElementById(idNum).classList.add("active2");
    }
    else {
      idNum -= 10;
      document.getElementById(idNum).classList.add("active2");
    }
  }

  let user = parseInt(document.querySelector(".active").id);
  let dragon1 = parseInt(document.querySelector(".active2").id);
  if (user === dragon1){
    alert("you lose")
  }


}


document.getElementById("11").classList.add("active");
document.getElementById("99").classList.add("active2");

document.addEventListener("keyup", keyDownTextField, false);
document.addEventListener("keydown", keyDownTextField2, false);

