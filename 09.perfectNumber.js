function solve(number) {
    let isPerfect = (number) => {
        let divisors = [];
        let counter = 0;

        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                divisors[counter] = i;
                counter += 1;
            }
        }

        let maxNum = divisors[divisors.length - 1];
        let sum = 0;

        for (let i = 0; i < divisors.length - 1; i++) {
            sum += divisors[i];
        }

        if (sum === maxNum) {
            return `We have a perfect number!`;
        } else {
            return `It’s not so perfect.`;
        }
    };

    console.log(isPerfect(number));
}