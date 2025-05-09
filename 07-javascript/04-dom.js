// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

let copyButton = document.querySelector("#copy");
copyButton.onclick = function (event) {
  let formInput =
    document.querySelector("#userInput1").value;
  let outputArea = document.querySelector(".output");
  outputArea.append(formInput);
};

//

let userInput = document.querySelector("#userInput2");
userInput.addEventListener("input", handleInput);

let newOutput = document.createElement("div");
newOutput.setAttribute("class", "output");
document
  .querySelector("#inputEventExample")
  .append(newOutput);

function handleInput(event) {
  console.log("click event", event);
  newOutput.textContent = userInput2.value;
}
