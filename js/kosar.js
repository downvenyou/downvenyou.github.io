function myFunction(imgs) {
  var nagyimg = document.getElementById("nagyimg");
  nagyimg.src = imgs.src;
  nagyimg.parentElement.style.display = "block";
}