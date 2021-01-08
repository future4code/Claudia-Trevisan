const checkEdit = (firstWord, secondWord) => {
    if (firstWord === secondWord)
        return false;
    if (firstWord.length - secondWord.length > 1)
        return false;
    if (firstWord.length > secondWord.length)
        return firstWord.includes(secondWord);
    if (secondWord.length > firstWord.length)
        return secondWord.includes(firstWord);
    let diferenceCharacter = 0;
    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] !== secondWord[i])
            diferenceCharacter++;
    }
    return diferenceCharacter === 1;
};
console.log(checkEdit("bananaaa", "banana"));
