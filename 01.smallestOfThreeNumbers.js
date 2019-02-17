function smallestNumber(number1, number2, number3) {
    number1 = Number(number1);
    number2 = Number(number2);
    number3 = Number(number3);

    if (number1 <= number2 && number1 <= number3) {
        console.log(number1)
    } else if (number2 <= number1 && number2 <= number3) {
        console.log(number2)
    } else if (number3 <= number1 && number3 <= number2) {
        console.log(number3)
    }
}