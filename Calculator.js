function calculator(symbol, num1, num2){
    if (symbol === "+") {
        return sum = (num1 + num2);
    }
    else if(symbol === "-") {
        return negative = (num1 - num2);
    }
    else if(symbol === "*") {
        return mult = (num1 * num2);
    }
    else {
        return div = (num1 / num2);
    }
}

calculator("+", 5, 3)