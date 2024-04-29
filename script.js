function checkDivisibility() {
  const numberInput = document.getElementById('number');
  const resultParagraph = document.getElementById('result');
  const number = parseInt(numberInput.value);
  
  // Check if the input is empty
  if (isNaN(number)) {
    resultParagraph.textContent = "Please enter a valid number.";
    return; // Exit the function early if input is empty
  }
  
  if (number % 3 === 0) {
    resultParagraph.textContent = "Number is divisible by 3.";
  } else {
    resultParagraph.textContent = "Number is not divisible by 3.";
  }
}
