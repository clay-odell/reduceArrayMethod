function extractValue(arr, key) {
    return arr.reduce(function (acc, currentVal){
        acc.push(currentVal[key]);
        return acc;
    }, []);
}
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

reduceAnswer1 = extractValue(arr, 'name')
