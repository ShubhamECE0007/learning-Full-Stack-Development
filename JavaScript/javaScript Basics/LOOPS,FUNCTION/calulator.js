function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
            break;
           

        case "-":
            console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
            break;

        case "*":
            console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);  
             break;
         

        case "/":
          console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
           break;

        default:
            return "Invalid operator";
    }

    
 }


 calculator(10, 5, "+");
 calculator(21,7,"/");