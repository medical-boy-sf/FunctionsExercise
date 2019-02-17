function solve(number) {
    // Palindrome checking function
    let isPalindromeF = (number) => {
        isPalindrome = true;
        numberToStr = number.toString();

        let isOdd = (number) => {
            if (!(number % 2)) return true;
            else return false;

        };

        if (isOdd(numberToStr.length)) {

            for (let i = 0; i < numberToStr.length / 2 - 1; i++) {

                if (numberToStr[i] !== numberToStr[numberToStr.length - 1 - i]) {
                    isPalindrome = false;
                }
            }

            return isPalindrome;
        } else {
            for (let i = 0; i < numberToStr.length / 2; i++) {

                if (numberToStr[i] !== numberToStr[numberToStr.length - 1 - i]) {
                    isPalindrome = false;
                }
            }

            return isPalindrome;
        }
    };
    // The end of checking palindrome function

    for (let i = 0; i < number.length; i++) {
        console.log(isPalindromeF(number[i]));
    }
}