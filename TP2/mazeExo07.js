document.getElementById("start").addEventListener("click", function () {
  startBtn.onmouseout = function clickEvent(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;

    if (x < 0) {
      boundaries.forEach((box) => {
        box.classList.add("youlose");
      });
    }
  };
});
