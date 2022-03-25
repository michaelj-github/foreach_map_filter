/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
// const myArray = [1,2,3,4,5,6];

function doubleValues(arr){
const newArray = [];
arr.forEach(function(value) {
  newArray.push(value * 2);
})
return newArray;
}
// console.log(doubleValues(myArray));

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
  const newArray = [];
  arr.forEach(function(value) {
    if(value % 2 === 0){
      newArray.push(value);
    }
  })
  return newArray;
}
// console.log(onlyEvenValues(myArray));

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
// const myArray = ['colt','matt', 'tim', 'test', 'hi', 'goodbye', 'smile', 'a', 'b', ''];
function showFirstAndLast(arr){
  const newArray = [];
  arr.forEach(function(value) {
    if(value.length > 1) {
    newArray.push(value[0] + value[value.length - 1]);
    }
    else if(value.length === 1){
    newArray.push(value[0]);
    }
    else {
    newArray.push(value);
    }
  })
  return newArray;
}
// console.log(showFirstAndLast(myArray));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

// const myNamesArray = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
function addKeyAndValue(arr,key,value){
  const newArray = [];
  arr.forEach(function(theValue) {
    theValue[key] = value;
    newArray.push(theValue);
  })
  return newArray;
}
// console.log(addKeyAndValue(myNamesArray, 'title', 'instructor'));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
const newObject = {};
const inArray = Array.from(str.toLowerCase());
const vowelArray = inArray.filter(function(char) {
return 'aeiou'.indexOf(char) !== -1;
})
vowelArray.forEach(function(theChar) {
if(Object.keys(newObject).length === 0) {
  newObject[theChar] = 1;
} else {
   let objectFound = false;
   let i = 0;
    for(let x in newObject) {
      if(Object.keys(newObject)[i] === theChar) {
        objectFound = true;
        newObject[x]++;
      }
      i++;
    }
 if (!objectFound) {
   newObject[theChar] = 1;
 }
}
})
return newObject;
}
// console.log(vowelCount('THE quick brown FOX jumped over the lazy DOG'));

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

// const myNumbersArray = [1,2,3];

function doubleValuesWithMap(arr) {
  const newArray = [];
  arr.map(function(value) {
    newArray.push(value * 2);
  });
  return newArray;
}
// console.log(doubleValuesWithMap(myNumbersArray));

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

// const myNumbersArray = [1,2,3];

function valTimesIndex(arr){
  const newArray = [];
  arr.map(function(value, i) {
    newArray.push(value * i);
  });
  return newArray;
}
// console.log(valTimesIndex(myNumbersArray));

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

// const myNamesArray = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
// const myNamesArray = [{title: 'Matron'}, {title: 'Steward'}, {title: 'Chef'}, {title: 'Server'}];

function extractKey(arr, key){
  const newArray = [];
  const theKey = key;
  arr.map(function(theValue) {
    newArray.push(theValue[theKey]);
  })
  return newArray;
}
// console.log(extractKey(myNamesArray, 'name'));
// console.log(extractKey(myNamesArray, 'title'));

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

// const myFullNamesArray = [
//   { first: "Elie", last: "Schoppik" },
//   { first: "Tim", last: "Garcia" },
//   { first: "Matt", last: "Lane" },
//   { first: "Colt", last: "Steele" }
// ];

function extractFullName(arr){
  const newArray = [];
  arr.map(function(theValue) {
    newArray.push(theValue['first'] + " " + theValue['last']);
  })
  return newArray;
}
// console.log(extractFullName(myFullNamesArray));


/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

// const myPetOwnersArray = [
//   { first: "Elie", last: "Schoppik" },
//   { first: "Tim", last: "Garcia", isCatOwner: true },
//   { first: "Matt", last: "Lane" },
//   { first: "Colt", last: "Steele", isCatOwner: true }
// ];
function filterByValue(arr, key) {
  const newArray = arr.filter(function(theValue) {
    return theValue[key];
  });
  return newArray;
}
// console.log(filterByValue(myPetOwnersArray, "isCatOwner"));

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/
// const myNumbersArray = [1,2,3,4,5];

function find(arr, searchValue) {
  const newArray = arr.filter(function(theValue) {
    return (theValue === searchValue);
  });
  return newArray[0];
};
// console.log(find(myNumbersArray, 6));

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

// const myPetOwnersArray = [
//   { first: "Elie", last: "Schoppik" },
//   { first: "Tim", last: "Garcia", isCatOwner: true },
//   { first: "Matt", last: "Lane" },
//   { first: "Colt", last: "Steele", isCatOwner: true }
// ];
function findInObj(arr, key, searchValue) {
  const newArray = arr.filter(function(theValue) {
    return (theValue[key] === searchValue);
  });
  return newArray[0];
};
// console.log(findInObj(myPetOwnersArray, "isCatOwner", true));


/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
  const inArray = Array.from(str.toLowerCase());
  const notVowelArray = inArray.filter(function(char) {
  return 'aeiou'.indexOf(char) === -1;
  })
return notVowelArray.join('');
}
// console.log(removeVowels('THE quick brown FOX jumped over the lazy DOG'));
// console.log(removeVowels('ZAZEZIZOZU'));

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/
// const myNumbersArray = [4,4,4,4,4]; // [1,2,3,4,5];

function doubleOddNumbers(arr) {
  const newArray = arr.filter(function(theValue) {
    return (theValue % 2 !== 0);
  });
  const doubledArray = newArray.map(function(theValue) {
    return (theValue * 2);
  })
  return doubledArray;
};
// console.log(doubleOddNumbers(myNumbersArray));
