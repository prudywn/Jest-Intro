function reverseWord(word){
    return word.toLowerCase().split('').reverse('').join('').replaceAll(',', '')
}

module.exports = reverseWord