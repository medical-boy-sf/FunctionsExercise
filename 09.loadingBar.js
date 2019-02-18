function solve(loaded) {
    loaded = Number(loaded);
    let remaining = 100 - loaded;
    let message = `${loaded}% [`;
    if (loaded !== 100) {
        for (let i = 0; i < loaded; i += 10) {
            message += '%';
        }

        for (let i = 0; i < remaining; i += 10) {
            message += '.';
        }

        message += ']\nStill loading...'
    } else {
        message = "100% Complete!\n[%%%%%%%%%%]";
    }
    return message;
}