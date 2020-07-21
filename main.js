let firstNumber = Math.floor(prompt('Write your first number'));
console.log(firstNumber);
let secondNumber = Math.floor(prompt('Write your second number'));
console.log(secondNumber);
let check = confirm('Do you want to skip even numbers');
console.log(check);
if (check){
  let sum = 0;
  for (let numbers = firstNumber; numbers <= secondNumber; numbers++){
    if (numbers % 2 !== 0){
      sum += numbers;
    }
  }
  alert(sum);
} else{
  let sum = 0;
    for (let numbersEven = firstNumber; numbersEven <= secondNumber; numbersEven++){
    sum +=numbersEven;
    
    }
  alert(sum);
}
/*let container=document.querySelector("#container");
container.innerHTML=`
<p>First number: ${firstNumber};</p>
<p>Second number: ${secondNumber};</p>
<p>Total: ${sum};</p>
`;*/
