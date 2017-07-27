const addStudent = (e) => {
  console.log(e);
  document.getElementById('list').innerHTML += `<li>${document.getElementById("input").value}<span class="remove">x</span></li>`
  actualize();
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
}
const removeStudent = (e) => {
  child = e.target.parentElement
  console.log(e.target.parentElement)
  e.target.parentElement.parentNode.removeChild(child)
};
const actualize = () => {
  for(i=0;i<document.getElementsByClassName("remove").length;i++) {
    document.getElementsByClassName("remove")[i].addEventListener('click', removeStudent)
  }
}
const randomize = () => {
  var select = setInterval(function() {
    winner = document.getElementById("list").children[`${Math.floor(Math.random()*document.getElementById("list").children.length)}`]
    winnerName = winner.textContent.substr(0, winner.textContent.length-1);
    document.getElementById('resultname').innerHTML = winnerName;
  }, 150)
  setTimeout(function() {
    clearInterval(select);
    document.getElementById('resultname').classList.add("winanimation")
  }, 2000)
}
const final = () => {
  winner = document.getElementById("list").children[`${Math.floor(Math.random()*document.getElementById("list").children.length)}`]
  winnerName = winner.textContent.substr(0, winner.textContent.length-1);
  document.getElementById("main").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("page").style.display = "none";
    document.getElementById("celebration").style.display = "flex";
    setTimeout(function() {
      document.getElementById("celebration").style.opacity = "1";
    }, 50)
    setTimeout(randomize(), 100)
  }, 2000)
}
const reset = () => {
  document.getElementById("celebration").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("celebration").style.display = "none";
    document.getElementById("page").style.display = "flex";
    setTimeout(function() {
      document.getElementById("main").style.opacity = "1";
    }, 50)
  }, 2000)
}
document.getElementById("add").addEventListener('click', addStudent);
document.getElementById("result").addEventListener('click', final);
document.getElementById("reset").addEventListener('click', reset)
actualize();
