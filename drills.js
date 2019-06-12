/* eslint-disable indent */
/* eslint-disable strict */
function urlify(str) {
    let url = str.split("").map(char => {
        console.log(char)
        if (char === " ") {

            return "%20"
        }
        else {
            return char
        }
    })
    return url.join("")
}

console.log(urlify("tauhida parveen"))

function filter(arr, target) {
    let newArr = []
    arr.map(index => {
        if (index !== target) {
            newArr.push(index)
        }
    })
    return newArr
}

let testArr = ['a', 's', 'd', 'f']
console.log(filter(testArr, 's'))

let numArr = [4, 6, -3, 5, -2, 1]

function maxSum(arr) {
    let sum = 0;
    let maxSum = 0;
    arr.map(number => {
        sum += number;
        if (sum > maxSum) {
            maxSum = sum;
        }
    })
    return maxSum
}

console.log(maxSum(numArr))

let arrX = [1, 3, 6, 8, 11]
let arrY = [2, 3, 5, 8, 9, 10]

function mergeArr(x, y) {
    let merged = [];
    let lArr = ((x > y) ? x : y);
    let sArr = ((x < y) ? x : y);
    merged.push(...lArr, ...sArr)
    function sortNumber(a, b) {
        return a - b;
    }
    return merged.sort(sortNumber);

}

console.log(mergeArr(arrX, arrY))

function removeChar(string, rem) {
    let remove = []
    let edited = []
    let unedited = []

    function arrayToString(array) {
       let s = '';
       for (let i=0;i<array.length;i++){
           s += array[i]
       }
       return s
    }

    for (let i = 0; i < string.length; i++) {
        unedited[i] = string.charAt(i)
    }

    for (let i=0; i< rem.length; i++){
        remove[i] = rem.charAt(i)
    }

    console.log(remove)

    unedited.map(char => {
        if (!remove.includes(char)) {
            edited.push(char)
        }
    })
    return arrayToString(edited)
}

let remTest = 'Battle of the Vowels: Hawaii vs. Grozny'
let REM = 'aeiou'
console.log(removeChar(remTest, REM))



function restProd(arr) {
    let products = [];
    arr.map(num => {
        const reducer = (acc, curr) => acc * curr;
        let prod = arr.reduce(reducer) / num;
        products.push(prod)
    })
    return products
}

console.log(restProd([1, 3, 9, 4]))

function findO(array){
    let output = [...array];
    console.log(output)
    array.map(row => {
        let j = 0
        let nrow
            row.map(char => {
                let column = j%row.length;
                console.log(char)
                console.log(column)
                for(let i=0; i <array.length; i++){
                    console.log(output)
                    output[i][column] = 0;
                }
                j += 1;
            })
        nrow++
        console.log(nrow)
    })
    return output
}

let testfindO = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
];



function checkRo(x,y){
    for ( let i=0; i < x.length ; i++){
        if (x === (y.slice(i) + y.slice(0,i))) {
            return true;
        }
    }
    return false;
}

console.log(checkRo('amazon','zonama'))

