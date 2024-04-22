quote = document.querySelector(".quote");
author = document.querySelector(".author");
nextBtn = document.querySelector(".next");

const apiUrl = "https://api.quotable.io/quotes/random";
async function getquote() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  quote.textContent = data[0].content;
  author.textContent = data[0].author;
}
getquote();
nextBtn.addEventListener("click", function (event) {
  getquote();
});

function newTweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.textContent,
    "tweet window",
    "width=300 ,height=300 "
  );
}
