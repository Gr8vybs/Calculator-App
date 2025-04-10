//selection of different buttons using the querySelector object function
let displayScreen = document.querySelector('#display-text');
let numButtons = document.querySelectorAll('.numbers'); //selecting all numbers 0-9
let operators = document.querySelectorAll('.operators'); // Selecting all arithmetic operators for computing values
let deleteKey = document.querySelector('#delete'); // Selecting the delete button
let clearKey = document.querySelector('#clear'); // Selecting the clear button
let equalsKey = document.querySelector('#equals'); // Selecting the equals button


// Defination of key variables
let currentInput;
let result;

// creating a function for the numbers button,looping through the nodelist and updating the display screen with the latest input

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent; // get the text content of the clicked button
    currentInput = value; // the value will be updated to the current input
    displayScreen.textContent += currentInput; // the current input is being displayed or updated to the screen.
  })
})

// creating a function for the operators needed for arithmetic logic. The forEach method is used to loop over the nodelist, the current input is updated and displayed to the screen

operators.forEach(button => {
  button.addEventListener('click', () => {
    const operate = button.textContent; // gets the text content of the clicked button
    currentInput = operate; // the text content of the button is updated on the current input placeholder element
    displayScreen.textContent += currentInput; // the display screen is updated with the current input
    
  })
})

// creating a function for the delete button, which will serve to remove the last element from the display screen

deleteKey.addEventListener('click', () => {
  // Assuming `displayScreen` holds the content of your calculator display
  let currentValue = displayScreen.innerText; // Get the current content of the display
  if (currentValue.length > 0) {
    // Remove the last character from the string
    displayScreen.innerText = currentValue.slice(0, -1);
  }
});

// creating a function for the clear button, which will clear the display screen

clearKey.addEventListener('click', () => {
  // Assuming the display screen holds tge content of the calculator display
  let currentValue = displayScreen.innerText; // it gets the text of the display screen
  if (currentValue.length > 0) {
    // we remove the entire text content of the dispaly screen
    displayScreen.innerText = '';
  }
})

// creating a function for the equals button, which evaluates the expression imputed and return a result

equalsKey.addEventListener('click', () => {
  // we let a variable called expression equals the innerText of the display screen
  let expression = displayScreen.innerText // gets the innerText of the display screen
  if (expression.length > 0) { // checking if the expression is not empty
    try {
      result = eval(expression); // evaluates the expression
      displayScreen.textContent = result; // Displays the calculated result
    } catch (error) {
      console.error("Error:", error.message); // Logs any error
      displayScreen.textContent = "Invalid Expression"; // Alerts user
    }
  }
});