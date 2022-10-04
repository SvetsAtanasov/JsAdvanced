function getArticleGenerator(articles) {
  let newArr = [...articles];
  const content = document.getElementById("content");

  return function () {
    if (newArr.length === 0) return;

    const article = document.createElement("article");
    article.textContent = newArr[0];
    content.appendChild(article);

    return newArr.shift();
  };
}

let showText = getArticleGenerator([
  "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
  "A group of cats is called a clowder.",
  "Cats have over 20 muscles that control their ears.",
  "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
  "The world's largest cat measured 48.5 inches long.",
]);

showText();
