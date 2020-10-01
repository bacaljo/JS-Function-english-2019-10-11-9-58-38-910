function countWords(message) {
    let words = message
        .replace(RegExp('[^a-zA-Z]+'), ' ')
        .split(' ');

    return words.length;
}
countWords('Good morning, I love JavaScript.');