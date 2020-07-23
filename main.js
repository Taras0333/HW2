let firstNumber = 0;
while (firstNumber <= 0 )  {
  firstNumber = Math.floor(prompt('Write your first number, bigger then null'));
  if (firstNumber <= 0) {
    alert('Try again');
  }
}
console.log(firstNumber);
let secondNumber = '';
while (secondNumber <= firstNumber )  {
  secondNumber = Math.floor(prompt('Write your second number, bigger then first'));
  if (secondNumber <= firstNumber) {
    alert('Try again');
  }
}
console.log(secondNumber);
const check = confirm('Do you want to skip even numbers');
console.log(check);
let sum = 0;
if (check){
  for (let numbers = firstNumber; numbers <= secondNumber; numbers++){
    if (numbers % 2 !== 0){
      
      sum += numbers;
    }
  }
} else{
    for (let numbersEven = firstNumber; numbersEven <= secondNumber; numbersEven++){
    sum +=numbersEven;
    
    }
}
  console.log(sum);
let container=document.querySelector("#container");
container.innerHTML=`
<p>First number: ${firstNumber};</p>
<p>Second number: ${secondNumber};</p>
<p>Total: ${sum};</p>
`;
