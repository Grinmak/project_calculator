
let finalResult = 0;
let numberToCalculateFurther;;
let operatorSymbol;
let numberToDisplay = '';
const storeData = {};
const displayLimit = 9;
let countDigits = 0;

//setup event listeners
const result = document.querySelector('.result');
const allButtons = document.getElementById('all_buttons').querySelectorAll('button');
allButtons.forEach(btn => btn.addEventListener('click', getValue));

const twoSpecialButton = document.getElementById('spec_btn').querySelectorAll('button');
twoSpecialButton.forEach(btn => btn.addEventListener('click', getValueSpec));

window.addEventListener('keydown', keyBoardInput);

//then keyboard pushed
function keyBoardInput(event) {
  if(storeData.enterActivated === true && Number(event.key) || event.key === '0'){
   numberToDisplay = '';
   storeData.enterActivated = false;
  }; 
  if(event.key === 'Delete') {chooseOperator('C')};
  if(event.key === 'Backspace'){chooseOperator('DEL')}
  if(event.key === '.' && numberToDisplay.length > 0 && !storeData.comma){
     storeData.comma = true;
     numberToDisplay += '.';
     return result.textContent = `${numberToDisplay}`;
  }
   if(Number(event.key) || event.key === '0'){
      while(countDigits < displayLimit){
         numberToDisplay += event.key;
         console.log(numberToDisplay);
         countDigits ++;
         return result.textContent = `${numberToDisplay}`;
      }; 
   };
   if (event.key === '/' || event.key === '*'||
       event.key === '-' || event.key === '+'){ 
         if(storeData.operatorSymbol && numberToDisplay.length > 0){
             storeData.secondNumber = Number(numberToDisplay);
             chooseOperator(storeData.operatorSymbol)
         } 
       delete storeData.comma;
       if(numberToDisplay.length > 0){
          storeData.firstNumber = Number(numberToDisplay); 
         }
       countDigits = 0;
       storeData.operatorSymbol = event.key;
       if(storeData.firstNumber){storeData.firstNumber = Number(numberToDisplay)};
       numberToDisplay = '';   
   }else if (event.key === 'Enter'){
      storeData.enterActivated = true;
      storeData.secondNumber = Number(numberToDisplay);
      chooseOperator(storeData.operatorSymbol);     
   }
};

//on screen buttons actions
function getValue (event){
   if(storeData.enterActivated === true && event.target.classList.contains('digit')){
      numberToDisplay = '';
      storeData.enterActivated = false;
     }; 
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
        if(storeData.operatorSymbol  && numberToDisplay.length > 0){
            storeData.secondNumber = Number(numberToDisplay);
            chooseOperator(storeData.operatorSymbol)
        } 
      delete storeData.comma;
        if(numberToDisplay.length > 0){
            storeData.firstNumber = Number(numberToDisplay); 
         }
      countDigits = 0;
      storeData.operatorSymbol = this.textContent;
      if(storeData.firstNumber){storeData.firstNumber = Number(numberToDisplay)};
      numberToDisplay = '';   
    }else if (event.target.classList.contains ('operator_get_result')){
      storeData.enterActivated = true;
      storeData.secondNumber = Number(numberToDisplay);
      chooseOperator(storeData.operatorSymbol);    
   }
}

//calculation
function chooseOperator(symbol){
   if(symbol !== 'DEL'){
      if(symbol === '/') {numberToDisplay = storeData.firstNumber / storeData.secondNumber};
      if(symbol === 'x' || symbol === '*') {numberToDisplay = storeData.firstNumber * storeData.secondNumber};
      if(symbol === '-') {numberToDisplay = storeData.firstNumber - storeData.secondNumber};
      if(symbol === '+') {numberToDisplay = storeData.firstNumber + storeData.secondNumber};
      if(symbol == 'C') {clearAllInputs()};
      resetOperator();
   }else if(symbol == 'DEL') {deleteLastDigit()};
   numberLimit();
   return result.textContent = `${numberToDisplay}`;                
}

function resetOperator(){
   delete storeData.operatorSymbol;
}

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
   storeData.secondNumber = Number(numberToDisplay);
   if(numberToDisplay === 0){
      numberToDisplay = '';
   };
   return result.textContent = `${numberToDisplay}`;
}

function getValueSpec(){
   chooseOperator(this.textContent);
}

function numberLimit(){
   let resultToString = String(numberToDisplay);
   if(resultToString.length > 9){
      resultToString = String(numberToDisplay).slice(0, 10);
      numberToDisplay = Number(resultToString);
   } 
   // numberToDisplay = parseFloat(numberToDisplay).toFixed(7);
   // let numToString = String(numberToDisplay).slice(0, 10);
   // numberToDisplay = Number(numToString);
}
