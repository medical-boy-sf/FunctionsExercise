function solve(number1, number2, number3) {
    number1 = Number(number1);
    number2 = Number(number2);
    number3 = Number(number3);

    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    console.log(subtract(sum(number1, number2), number3));
}