
const verifyMissingNumber = (listOfNumbers: number[]): number =>{

    let missingNumber: number = 0;

    for(let i = 1; i <= 100; i++){
        for(let num of listOfNumbers){
            if(num !== i) missingNumber = i
        }
    };

    return missingNumber
}


