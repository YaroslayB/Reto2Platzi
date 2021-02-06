const footer = document.querySelector(".footer-social");
console.log(footer);
const share = document.querySelector("#share-button");
console.log(share);

share.addEventListener("click", () => {
  if (footer.classList.contains("is-active")) {
    footer.classList.remove("is-active");
    share.classList.remove("is-active");
  } else {
    footer.classList.add("is-active");
    share.classList.add("is-active");
  }
});

// share.addEventListener('click', function(){
//     footer.classList.toggle('is-active')
// })
