document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.preventDefault();
  let navigation = document.querySelector(".nav-list");
  if (navigation.style.left == "-300px") {
    navigation.style.left = "0";
  } else {
    navigation.style.left = "-300px";
  }
});
