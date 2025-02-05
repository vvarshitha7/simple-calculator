function clearResult() {
  document.getElementById("result").value = "";
}

function appendValue(value) {
  const resultField = document.getElementById("result");
  if (value === '√') {
    resultField.value += '√';
  } else {
    resultField.value += value;
  }
}

function calculate() {
  const resultField = document.getElementById("result");
  let expression = resultField.value;

  try {
    // Replace √ with Math.sqrt() for evaluation
    expression = expression.replace(/√(\d+(\.\d+)?)/g, (match, number) => Math.sqrt(parseFloat(number)));

    // Evaluate the expression
    const result = eval(expression);
    resultField.value = result;
  } catch (error) {
    resultField.value = "Error"; // Handle invalid input
  }
}
