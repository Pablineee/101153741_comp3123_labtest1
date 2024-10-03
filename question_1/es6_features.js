function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        if (Array.isArray(mixedArray)){
            resolve(
                mixedArray
                    .filter(item => typeof item === 'string')
                    .map(item => item.toLowerCase())
            );
        } else {
            reject(new Error(`Please enter a valid array.`));
        }
        
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(erorr));