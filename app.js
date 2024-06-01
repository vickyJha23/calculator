const calculate = (num1, operator, num2) => {
      let result = "";
      if(operator == "add"){
            result = parseFloat(num1) + parseFloat(num2);
            return result;
      }
      if(operator == "substract"){
             result = parseFloat(num1) + parseFloat(num2);
             return result;
      }
      if(operator == "multiply"){
              result = parseFloat(num1) + parseFloat(num2);
              return result;
      }
      if(operator == "divide"){
              result = parseFloat(num1) + parseFloat(num2);
      }
}
const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".calculator_display");
const keys = calculator.querySelector(".calculator_keys");
keys.addEventListener("click", (e) => {
   if(e.target.matches("button")){
       const key = e.target;
       const action = key.dataset.action;
      //  console.log(`action is ${action}`);
       const keyContent = key.textContent;
       const displayedNum = display.textContent;
      //  console.log(`key content is ${keyContent}`);
      const prevoiusKeyType = calculator.dataset.prevoiusKeyType;            
      Array.from(key.parentNode.children).forEach((item) => {
            item.classList.remove("is-depressed");
      })
      if(!action){
             if(displayedNum === "0" || prevoiusKeyType === "operator"){
                   display.textContent = keyContent;
             }
             else{
                   display.textContent = displayedNum + keyContent;
             }
             calculator.dataset.prevoiusKeyType = 'number'
      }
       if(action === "decimal"){
            if(!displayedNum.includes(".")){
                   display.textContent = displayedNum + ".";
            }
            else if(prevoiusKeyType === "operator" || prevoiusKeyType === "calculate"){
                   display.textContent = "0.";
            }
            calculator.dataset.prevoiusKeyType = "decimal";
       }

      if(action === "add" 
      || action === "substract" 
      || action === "multiply" || 
      action === "divide"){
           key.classList.add("is-depressed");
           calculator.dataset.prevoiusKeyType = "operator";
           calculator.dataset.firstValue = displayedNum;
           calculator.dataset.operator = action;
      }
      if(action === "calculate"){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.prevoiusKeyType = "calculate";
      }
}
});

