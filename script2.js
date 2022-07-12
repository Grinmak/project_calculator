
let finalResult = 0;
let numberToCalculateFurther;;
let operatorSymbol;
let numberToDisplay = '';
const storeData = {};


const result = document.querySelector('.result');
const allButtons = document.querySelectorAll('button');
allButtons.forEach(btn => btn.addEventListener('click', getValue));

const displayLimit = 10;
let countDigits = 0;

function getValue (event){
   if (event.target.classList.contains('digit')){
      while(countDigits < displayLimit){
         numberToDisplay += this.textContent;
         countDigits++;
         return result.textContent = `${numberToDisplay}`;
        }
    // }if(!storeData['firstNumber']){
    //     storeData.firstNumber = Number(numberToDisplay);
    // }if(storeData['firstNumber']){
    //     storeData.secondNumber = Number(numberToDisplay);
    }if (event.target.classList.contains('operator')){ 
        if(storeData.operatorSymbol){
            storeData.secondNumber = Number(numberToDisplay);
            chooseOperator(storeData.operatorSymbol)
        } 
      storeData.firstNumber = Number(numberToDisplay); 
      countDigits = 0;
      storeData.operatorSymbol = this.textContent;
      numberToDisplay = '';   
    }else if (event.target.classList.contains ('operator_get_result')){
      storeData.secondNumber = numberToDisplay;
      chooseOperator(storeData.operatorSymbol);
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
   delete storeData.operatorSymbol;
   firstNumber = 0;
   lastNumber = 0;
}

function divide(){
  numberToDisplay = storeData.firstNumber / storeData.secondNumber;
  resetInitialNumbers();
  return result.textContent = `${numberToDisplay}`;
};

function multiply(){
    numberToDisplay = storeData.firstNumber * storeData.secondNumber;
    resetInitialNumbers();
    return result.textContent = `${numberToDisplay}`;
};

function subtract(){
    numberToDisplay = storeData.firstNumber - storeData.secondNumber;
    resetInitialNumbers();
    return result.textContent = `${numberToDisplay}`;
};

function sum(){
    numberToDisplay = storeData.firstNumber + storeData.secondNumber;
    resetInitialNumbers();
    return result.textContent = `${numberToDisplay}`;
};

