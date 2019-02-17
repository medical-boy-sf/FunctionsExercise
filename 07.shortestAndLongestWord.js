function solve(sentence) {
    sentence = sentence.split(" ").filter(x => x !== '');

    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i].split('');
        let newWord = [];
        for (let j = 0; j < word.length; j++) {
            if (word[j] !== "." && word[j] !== "," && word[j] !== "!" && word[j] !== "?" && word[j] !== " " && word[j] !== ":" && word[j] !== "-") {
                newWord[j] = word[j];
            }
        }
        newWord = newWord.join('');
        sentence[i] = newWord;
    }

    let maxLength = Number.MIN_SAFE_INTEGER;
    let maxWord = '';
    let minLength = Number.MAX_SAFE_INTEGER;
    let minWord = '';

    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i].length > maxLength) {
            maxLength = sentence[i].length;
            maxWord = sentence[i];
        }

        if(sentence[i].length < minLength) {
            minLength = sentence[i].length;
            minWord = sentence[i];
        }
    }

    console.log(`Longest -> ${maxWord}`);
    console.log(`Shortest -> ${minWord}`);
}