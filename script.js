
let firstNumber = '';
let lastNumber = '';
let finalResult = '';
let numberToCalculateFurther;;
let operatorSymbol;


const result = document.querySelector('.result');

const allButtons = document.querySelectorAll('button');

allButtons.forEach(btn => btn.addEventListener('click', getValue));


const displayLimit = 10;
let countDigits = 0;


function getValue (event){
   // if(Number(numberToCalculateFurther)){
   //    lastNumber = numberToCalculateFurther;
   // }
   if (event.target.classList.contains('digit')){
      while(countDigits < displayLimit){
         lastNumber += this.textContent;
         countDigits++;
         return result.textContent = `${lastNumber}`;
      }

   }else if (event.target.classList.contains('operator')){    
      countDigits = 0;
      firstNumber = lastNumber;
      lastNumber = '';
      operatorSymbol = this.textContent;   
   }else if (event.target.classList.contains ('operator_get_result')){
      chooseOperator(operatorSymbol);
   }
}

function chooseOperator(symbol){
   switch(symbol) {
      case '/':
         divide();
         break;
      case 'x':
         multiply();
         break;
      case '-':
         subtract();
         break;
      case '+':
         sum();
         break;
   }
   
}

function resetInitialNumbers(){
   firstNumber = '';
   lastNumber = '';
}

function divide(){
  finalResult = firstNumber / lastNumber;
  numberToCalculateFurther = finalResult;
  resetInitialNumbers();
  return result.textContent = `${numberToCalculateFurther}`;
};

function multiply(){
   finalResult = firstNumber * lastNumber;
   numberToCalculateFurther = finalResult;
   resetInitialNumbers();
   return result.textContent = `${numberToCalculateFurther}`;
};

function subtract(){
   finalResult = firstNumber - lastNumber;
   numberToCalculateFurther = finalResult;
   resetInitialNumbers();
   return result.textContent = `${numberToCalculateFurther}`;
};

function sum(){
   finalResult = Number(firstNumber) + Number(lastNumber);
   numberToCalculateFurther = finalResult;
   resetInitialNumbers();
   return result.textContent = `${numberToCalculateFurther}`;
};

