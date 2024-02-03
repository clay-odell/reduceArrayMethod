function extractValue(arr, key) {
    return arr.reduce(function (acc, currentVal){
        acc.push(currentVal[key]);
        return acc;
    }, []);
}
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

reduceAnswer1 = extractValue(arr, 'name')

function vowelCount(str){
    const vowels = 'aeiou';
    return str.split('').reduce(function(acc, currentVal){
        let lowerCased = currentVal.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1) {
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
          }
          return acc;
        }, {});
}
reduceAnswer2 = vowelCount('Elie') 
reduceAnswer3 = vowelCount('Tim') 
reduceAnswer4 = vowelCount('Matt') 
reduceAnswer5 = vowelCount('hmmm') 
reduceAnswer6 = vowelCount('I Am awesome and so are you') 
    
function addKeyAndValue(arr, key, val) {
    return arr.reduce(function(acc, currentVal, index) {
        acc[index][key] = val;
        return acc;
    }, arr);
}
const arrKeyVal = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

const reduceAnswer7 = addKeyAndValue(arr, 'title', 'Instructor')
