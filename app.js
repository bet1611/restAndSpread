const filterOutOdds = (...args) => args.filter(v => v % 2 === 0) 

const findMin = (...args) => Math.min(...args)

const mergeObject = (obj1, ob2) => (...obj1, ...obj2)

const doubleAndReturnArgs = (arr, ...arg) => [...arr, ...arg.map(v => v * 2)]

// return a new array with every item in array 1 and array 2
const = extend = (array1, array2) => {
    return []...array1, ...array2];

}
// return a new object with all the keys and values from obj and a new key/value pair
const = all = (obj, key, val) => {
    return {...obj, [key] : val}
}

// option 2
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

// return a new object with a key removed
const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

//combine 2 object and return a new object
const combinedObj = (obj1, obj2) => {
    return {...obj1, ...obj2};

}

// return a new object with a modified key and value
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

// option 2
return {...obj, [key]: val};