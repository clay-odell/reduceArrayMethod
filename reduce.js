function extractValue(arr, key) {
    return arr.reduce(function (acc, currentVal){
        acc.push(currentVal[key]);
        return acc;
    }, []);
}
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

const reduceAnswer1 = extractValue(arr, 'name')

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
const reduceAnswer2 = vowelCount('Elie') 
const reduceAnswer3 = vowelCount('Tim') 
const reduceAnswer4 = vowelCount('Matt') 
const reduceAnswer5 = vowelCount('hmmm') 
const reduceAnswer6 = vowelCount('I Am awesome and so are you') 
    
function addKeyAndValue(arr, key, val) {
    return arr.reduce(function(acc, currentVal, index) {
        acc[index][key] = val;
        return acc;
    }, arr);
}
const arrKeyVal = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

const reduceAnswer7 = addKeyAndValue(arr, 'title', 'Instructor')

function partition(arr, callback) {
    return arr.reduce(function(acc, currentVal){
        if(callback(currentVal)) {
            acc[0].push(currentVal);
        } else {
            acc[1].push(currentVal);
        }
        return acc;
    },[[], []])
}function isEven(val){
    return val % 2 === 0;
  }
  
  const arrIsEven = [1,2,3,4,5,6,7,8];
  
const reduceAnswer8 = partition(arrIsEven, isEven) // [[2,4,6,8], [1,3,5,7]];
  
  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  
  const names = ['Elie', 'Colt', 'Tim', 'Matt'];
  
const reduceAnswer9 = partition(names, isLongerThanThreeCharacters)