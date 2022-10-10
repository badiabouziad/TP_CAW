

boundaries.forEach((boundary) => {
  boundary.addEventListener("mouseover", (event) => {
    //handle click
    boundary.classList.add("youlose");
  });
});
