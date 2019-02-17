function solve(password) {
    // Length of the password
    let lengthPassword = password.length;

    let passwordLength = (lengthPassword) => {
        if (lengthPassword >= 6 && lengthPassword <= 10) {
            return true;
        } else {
            return false;
        }
    };

    //Checking if the passwords contain only letters and digits
    let areOnlyLettersAndDigits = (password) => {
        let isTrue = true;
        for (let i = 0; i < lengthPassword; i++) {
            let currentChar = password[i];
            if(!((currentChar.charCodeAt(0) >= 65 && currentChar.charCodeAt(0) <= 90) || (currentChar.charCodeAt(0) >= 48 && currentChar.charCodeAt(0) <= 57) || (currentChar.charCodeAt(0) >= 97 && currentChar.charCodeAt(0) <= 122))) {
                isTrue = false;
                return isTrue;
            }
        }

        return isTrue;
    };

    //Checking if the password has at least 2 digits

    let areThere2Digits = (password) => {
        let counter = 0;
        for (let i = 0; i < lengthPassword; i++) {
            let currentChar = password[i];
            if (currentChar.charCodeAt(0) >=48 && currentChar.charCodeAt(0) <= 57) {
                counter += 1;
            }
        }

        if (counter >= 2) {
            return true;
        } else {
            return false;
        }

    };

    if (passwordLength(password) && areOnlyLettersAndDigits(password) && areThere2Digits(password)) {
        console.log("Password is valid");
    }

    if (!passwordLength(password)) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!areOnlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
    }

    if (!areThere2Digits(password)) {
        console.log("Password must have at least 2 digits");
    }
}