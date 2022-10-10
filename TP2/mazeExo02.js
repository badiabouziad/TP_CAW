





boundaries.forEach((box) => {
  box.addEventListener("mouseover", function () {
    boundaries.forEach((box) => {
      box.classList.add("youlose");
    });
  });
});
