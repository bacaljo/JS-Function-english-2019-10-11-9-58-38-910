function alphabetSort(message) {
    return message.split('')
        .sort()
        .join('');
}
alphabetSort('hello');