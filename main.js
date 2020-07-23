let firstNumber = +'';
while (firstNumber <= 0 || !Number.isInteger(firstNumber))  {
  firstNumber = +prompt('Write your first integer, bigger then null');
  if (firstNumber <= 0 || !Number.isInteger(firstNumber)) {
    alert('Try again');
  }
}
console.log(firstNumber);
let secondNumber = +'';
while (secondNumber <= firstNumber|| !Number.isInteger(secondNumber))  {
  secondNumber = +prompt('Write your second integer, bigger then first');
  if (secondNumber <= firstNumber || !Number.isInteger(secondNumber)) {
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
