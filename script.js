
let firstnumber = 0;
let secondNumber = 0;
let finalNumber = '';

const result = document.querySelector('.result');


const allButtons = document.querySelectorAll('button');
allButtons.forEach(btn => btn.addEventListener('click', getValue));

function getValue (){
   // console.log(this.textContent);
   finalNumber += this.textContent
   return result.textContent = `${finalNumber}`;
}
