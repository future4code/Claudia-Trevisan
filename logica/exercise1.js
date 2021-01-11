let arrayNumbers = [];
for (let i = 1; i <= 100; i++) {
    arrayNumbers.push(i);
}
;
arrayNumbers.pop();
const verifyMissingNumber = (listOfNumbers) => {
    let missingNumber = 0;
    for (let i = 1; i <= 100; i++) {
        for (let num of listOfNumbers) {
            if (num !== i)
                missingNumber = i;
        }
    }
    ;
    return missingNumber;
};
console.log(verifyMissingNumber(arrayNumbers));
