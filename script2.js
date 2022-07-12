
let finalResult = 0;
let numberToCalculateFurther;;
let operatorSymbol;
let numberToDisplay = '';
const storeData = {};


const result = document.querySelector('.result');
const allButtons = document.getElementById('all_buttons').querySelectorAll('button');
allButtons.forEach(btn => btn.addEventListener('click', getValue));

const twoSpecialButton = document.getElementById('spec_btn').querySelectorAll('button');
twoSpecialButton.forEach(btn => btn.addEventListener('click', getValueSpec));

const displayLimit = 10;
let countDigits = 0;

function getValue (event){
   if(event.target.classList.contains('comma') &&
      numberToDisplay.length > 0 && !storeData.comma){
         storeData.comma = true;
         numberToDisplay += '.';
         return result.textContent = `${numberToDisplay}`;
      }
   if (event.target.classList.contains('digit')){
      while(countDigits < displayLimit){
         numberToDisplay += this.textContent;
         countDigits++;
         return result.textContent = `${numberToDisplay}`;
        }
    }if (event.target.classList.contains('operator')){ 
        if(storeData.operatorSymbol){
            storeData.secondNumber = Number(numberToDisplay);
            chooseOperator(storeData.operatorSymbol)
        } 
      delete storeData.comma;
      storeData.firstNumber = Number(numberToDisplay); 
      countDigits = 0;
      storeData.operatorSymbol = this.textContent;
      numberToDisplay = '';   
    }else if (event.target.classList.contains ('operator_get_result')){
      storeData.secondNumber = numberToDisplay;
      chooseOperator(storeData.operatorSymbol);
   }
}

/* function chooseOperator(symbol){
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
      case 'C':
         clearAllInputs();
         break;
      case 'DEL':
         deleteLastDigit();
         break;
   }
   
} */
function chooseOperator(symbol){
   if(symbol === '/') {numberToDisplay = storeData.firstNumber / storeData.secondNumber};
   if(symbol === 'x') {numberToDisplay = storeData.firstNumber * storeData.secondNumber};
   if(symbol === '-') {numberToDisplay = storeData.firstNumber - storeData.secondNumber};
   if(symbol === '+') {numberToDisplay = storeData.firstNumber + storeData.secondNumber};
   if(symbol === 'C') {clearAllInputs()};
   if(symbol === 'DEL') {deleteLastDigit()};
   resetOperator();
   return result.textContent = `${numberToDisplay}`;                
}

function resetOperator(){
   delete storeData.operatorSymbol;
}
/*
function divide(){
  numberToDisplay = storeData.firstNumber / storeData.secondNumber;
  resetOperator();
  return result.textContent = `${numberToDisplay}`;
};

function multiply(){
    numberToDisplay = storeData.firstNumber * storeData.secondNumber;
    resetOperator();
    return result.textContent = `${numberToDisplay}`;
};

function subtract(){
    numberToDisplay = storeData.firstNumber - storeData.secondNumber;
    resetOperator();
    return result.textContent = `${numberToDisplay}`;
};

function sum(){
    numberToDisplay = Number(storeData.firstNumber) + Number(storeData.secondNumber);
    resetOperator();
    return result.textContent = `${numberToDisplay}`;
}; */

function clearAllInputs(){
   countDigits = 0;
   delete storeData['firstNumber'];
   delete storeData['secondNumber'];
   delete storeData['comma'];
   resetOperator();
   numberToDisplay = '';
   return result.textContent = `${numberToDisplay}`;

}

function deleteLastDigit(){
   let getAnArray = numberToDisplay.toString().split('');
   getAnArray.pop();
   countDigits--;
   numberToDisplay = Number(getAnArray.join(''));
   // numberToDisplay = Number(getAnArray);
   return result.textContent = `${numberToDisplay}`;
}

function getValueSpec(){
   chooseOperator(this.textContent);
}
