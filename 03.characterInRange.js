function solve(character1, character2) {
    let message = '';
    let min = (a, b) => {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    };

    let max = (a, b) => {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    };
    let start = min(character1.charCodeAt(0), character2.charCodeAt(0));
    let end = max(character1.charCodeAt(0), character2.charCodeAt(0));
    for (let i = start + 1; i < end; i++) {
        message += String.fromCharCode(i) + " ";
    }

    console.log(message);
}