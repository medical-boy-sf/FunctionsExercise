function solve(number) {
    let evenSum = (number) => {
      let sum = 0;
      let lastDigit = 0;

        while (number > 0) {
            lastDigit = number % 10;
            number = Math.trunc(number / 10);

            if (lastDigit % 2 === 0) {
                sum += lastDigit;
            }
        }

        return sum;
    };

    let oddSum = (number) => {
        let sum = 0;
        let lastDigit = 0;

        while (number > 0) {
            lastDigit = number % 10;
            number = Math.trunc(number / 10);

        if (lastDigit % 2 !== 0) {
                sum += lastDigit;
            }
        }

        return sum;
    };

    console.log(`Odd sum = ${oddSum(number)}, Even sum = ${evenSum(number)}`);
}

solve(3495892137259234);