const $ = document.querySelector.bind(document);

const secondHeader = $('.header__primary');

// window.onscroll = function() {
//     secondHeader.style.height = 160 + 'px';
//     secondHeader.style.height = 128 + 'px';
// }

var triple = (x) => Math.pow(x,3);

console.log(triple(2));

var array1 = ['javascript', 'php'];
var array2 = [1, 2, 3]
var array3 = [...array1, ...array2];
console.log(...array1, ...array2);
console.log(array3)

var logger = (message,type) => console[type](message);

logger('chỗ này mãi không được','warn');
var infoArr = [
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
];
function arrToObj(arr) {
return arr.reduce(function(newObj, arary) {
    return Object.assign(newObj,
        {
            [arary[0]] : [arary[1]]
        });
}, {})
}
var obj = arrToObj(infoArr);
console.log(obj);

console.log(obj['name']);

function arrToObj(arr) {
    let obj = {};
    for(var i = 0; i < arr.length; i++) {
       obj[arr[i][0]] = arr[i][1];
    }
    return obj
 }
 console.log(arrToObj(infoArr));

 var cours = {
    name: 'php',
    price: 200
 }


 const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(arr) {
    let newArr = [];
    arr.filter(function(arr,i) {
        if(arr.like > 5) {
            newArr.push(arr[i]);
        }
        return newArr;        
    }
    )
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 

