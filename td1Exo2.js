let p1 = document.querySelector("#premier");
let p2 = document.getElementsByClassName("special")[1];
let p3 = document.getElementsByTagName("p")[2];
let p4 = document.getElementById("dernier");
let site = document.getElementById("site");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

site.addEventListener("mouseover", function () {
  site.style.color = "red";
});
site.addEventListener("mouseout", function () {
  site.style.color = "black";
});
