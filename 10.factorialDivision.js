function solve(number1, number2) {

    let factorial = (number) => {
        let product = 1;
        for (let i = 2; i <= number; i++) {
            product *= i;
        }
        return product;
    };

    let division = (factorial(number1) / factorial(number2)).toFixed(2);
    console.log(division);
}