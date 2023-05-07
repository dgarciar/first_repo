const form = document.querySelector("form");
const container = document.getElementById("container");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const topCaption = document.querySelector("#top-caption").value;
    const bottomCaption = document.querySelector("#bottom-caption").value;
    const imageInput = document.querySelector("#image").value;

    const newDiv = document.createElement("div");
    newDiv.classList.add("childDiv");

    const picture = document.createElement('img');
    picture.classList.add("divImg");
    picture.src = imageInput;

    const containOne = document.createElement("div");
    containOne.classList.add("top-text");
    containOne.textContent = topCaption;
    
    const containTwo = document.createElement("div");
    containTwo.classList.add("bottom-text");
    containTwo.textContent = bottomCaption;
    
    const newButton = document.createElement("button");

    newButton.classList.add("newButtonStyle");
    newButton.innerText = "Remove";
    
    newDiv.appendChild(picture);
    newDiv.appendChild(containOne);
    newDiv.appendChild(containTwo);
    newDiv.appendChild(newButton);
    container.appendChild(newDiv);
    form.reset();

});

container.addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
        event.target.parentElement.remove();
    }
});

