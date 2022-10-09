let startBtn = document.getElementById("start");
let endBtn = document.getElementById("end");
let boundary1 = document.getElementById("boundary1");
let boundaries = document.querySelectorAll(".boundary");
let result;
startBtn.addEventListener("click", function () {
  startBtn.style.backgroundColor = "#88ff88";
  boundaries.forEach((boundary) => {
    boundary.style.backgroundColor = "#eeeeee";
  });
  result = "you won";
});

boundaries.forEach((boundary) => {
  boundary.addEventListener("mouseover", function () {
    boundary.style.backgroundColor = "red";
    result = "you lost";
    startBtn.style.backgroundColor = "white";
  });
});

endBtn.addEventListener("mouseover", function () {
  alert(result);
});
endBtn.addEventListener("mouseout", function () {
  startBtn.style.backgroundColor = "white";
});


