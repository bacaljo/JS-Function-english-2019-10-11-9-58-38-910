function reverseString(message) {
    let reversedMessage = [];
    for (character of message) {
        reversedMessage.unshift(character);
    }

    return reversedMessage.join('');
}
reverseString('hello');