window.onload = function () {
  boundaries.forEach((box) => {
    box.classList.remove("youlose");
  });
};

boundaries.forEach((box) => {
  startBtn.addEventListener("click", function () {
    box.classList.remove("youlose");
    console.log("ffff");
    document.getElementById("status").innerHTML =
      "Move your mouse over the S to begin.";
    document.getElementById("status").style.color = "black";
  });
});
boundaries.forEach((box) => {
  box.addEventListener("mouseover", function () {
    boundaries.forEach((box) => {
      box.classList.add("youlose");
      document.getElementById("status").innerHTML = "you Lost";
      document.getElementById("status").style.color = "red";
    });
  });
});
endBtn.addEventListener("mouseover", function () {
  document.getElementById("status").innerHTML = "you won";
  document.getElementById("status").style.color = "green";
  console.log("mcha");
});

document.getElementById("start").addEventListener("click", function () {
  startBtn.onmouseout = function clickEvent(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;

    if (x < 0) {
      boundaries.forEach((box) => {
        box.classList.add("youlose");
        document.getElementById("status").innerHTML = "stay on path";
        document.getElementById("status").style.color = "red";
      });
    }
  };
});
