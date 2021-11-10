let num1, num2, result: number;
num1 = parseInt(prompt('Ingresa un número.'));
num2 = parseInt(prompt('Ingresa un número.'));
if (num1 > num2) {
  result = num1 - num2;
} else {
  result = num2 - num1;
}
console.log(result);
