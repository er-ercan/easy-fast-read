console.log("Someone entered the Ercan Er website");

let paragraphs = document.getElementsByTagName("p");

function changeText(paragraphs) {
  let newArray = paragraphs.innerText
    .split(" ")
    .map((item) => {
      if (item.length > 5) {
        let newParag = document.createElement("p");
        newParag.setAttribute("id", "eklenenParagraf");
        let newSpan = document.createElement("span");
        newSpan.style.fontWeight = "bold";
        newSpan.style.opacity = "1";
        let charTemp = item.substring(0, 3);
        newParag.appendChild(document.createTextNode(item.substring(3)));
        newSpan.appendChild(document.createTextNode(charTemp));
        newParag.prepend(newSpan);

        return newParag.innerHTML;
      }
      return item;
    })
    .join(" ");

  return newArray;
}

for (let i = 0; i < paragraphs.length; i++) {
  let newChars = document.createElement("div");
  newChars.style.opacity = "0.5";
  let newSentence = changeText(paragraphs[i]);
  newChars.innerHTML = newSentence;
  let classNameValue = document.getElementsByClassName("td-main-content");
  classNameValue[0].appendChild(newChars);
}
