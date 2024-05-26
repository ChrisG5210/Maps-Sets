// What does the following code return?

// new Set([1,1,2,2,3,4])

console.log()
{1,2,3,4}

/////////////////////////////////////////////////////////////////

// What does the following code return?

// [...new Set("referee")].join("")

console.log ()
{"r", "e", "f", "e", "e", "r", "e", "e"}

//correct answer is "ref"????? 

/////////////////////////////////////////////////////////////////

// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

console.log(m)
//[1,2,3] , true;
//[1,2,3] , false;

/////////////////////////////////////////////////////////////////

// Write a function called hasDuplicate
// which accepts an array and returns true or 
// false if that array contains a duplicate

function mySet (num) {
    const numbers = new Set
    ([1,3,2,1])
    return num.filter((nums) => !numbers.has(nums))
}
const newNumbers = [1,5,-1,4];

mySet(newNumbers);

/////////////////////////////////////////////////////////////////

// Write a function called vowelCount which accepts a string and returns a map 
// where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount (str) { 
    const vowelMap = new Map();
    for (let [key, value] of vowelMap){
        return key, + value;
    }
}
return vowelMap;