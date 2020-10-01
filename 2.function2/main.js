function palindrome(message) {
    let left, right;
    if (message.length % 2 == 0) {
        left = (message.length / 2) - 1;
        right = left + 1;
    } else {
        left = Math.ceil(message.length / 2) - 1;
        right = left;
    }

    for (; left >= 0 && right < message.length; left--, right++) {
        if (message[left] != message[right]) {
            return false;
        }
    }

    return true;
}
palindrome('hello');
palindrome('abcba');