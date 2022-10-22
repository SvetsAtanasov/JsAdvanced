window.addEventListener("load", solve);

function solve() {
  let fName = document.getElementById("first-name");
  let lName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let storyTitle = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let storyText = document.getElementById("story");
  let publishBtn = document.getElementById("form-btn");
  const ul = document.getElementById("preview-list");

  publishBtn.addEventListener("click", publish);

  function publish() {
    const publishBtnVal = document.getElementById("form-btn");
    let vals = [fName, lName, age, genre, storyTitle, storyText];
    console.log(fName.value);

    if (
      fName.value === "" ||
      lName.value === "" ||
      age.value === "" ||
      genre.value === "" ||
      storyTitle.value === "" ||
      storyText.value === ""
    )
      return;

    const li = document.createElement("li");
    li.className = "story-info";

    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = `Name: ${fName.value} ${lName.value}`;

    const pAge = document.createElement("p");
    pAge.textContent = `Age: ${age.value}`;

    const pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${storyTitle.value}`;

    const pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genre.value}`;

    const pStoryText = document.createElement("p");
    pStoryText.textContent = storyText.value;

    const saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";
    saveBtn.textContent = "Save Story";
    saveBtn.addEventListener("click", save);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Story";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", edit);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete Story";
    deleteBtn.addEventListener("click", deleteStory);

    const storyInfoElements = [h4, pAge, pAge, pTitle, pGenre, , pStoryText];
    const btns = [saveBtn, editBtn, deleteBtn];
    ul.appendChild(li);

    storyInfoElements.forEach((x) => article.appendChild(x));
    li.appendChild(article);
    btns.forEach((x) => li.appendChild(x));

    vals.forEach((x) => (x.value = ""));

    publishBtnVal.disabled = true;
  }

  function save() {
    const main = document.getElementById("main");
    main.children[0].remove();
    main.children[0].remove();

    const h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";

    main.appendChild(h1);
  }

  function edit() {
    let fName = document.getElementById("first-name");
    let lName = document.getElementById("last-name");
    let age = document.getElementById("age");
    let storyTitle = document.getElementById("story-title");
    let genre = document.getElementById("genre");
    let storyText = document.getElementById("story");

    const articleVals = document.querySelector(".story-info article").children;
    console.log(articleVals);
    const publishBtnVal = document.getElementById("form-btn");
    publishBtnVal.disabled = false;

    fName.value = articleVals[0].textContent.split(": ")[1].split(" ")[0];
    lName.value = articleVals[0].textContent.split(": ")[1].split(" ")[1];
    age.value = articleVals[1].textContent.split(": ")[1];
    storyTitle.value = articleVals[2].textContent.split(": ")[1];
    genre.value = articleVals[3].textContent.split(": ")[1];
    storyText.value = articleVals[4].textContent;

    document.querySelector(".story-info").remove();
  }

  function deleteStory() {
    document.querySelector(".story-info").remove();
    const publishBtnVal = document.getElementById("form-btn");
    publishBtnVal.disabled = false;
  }
}
