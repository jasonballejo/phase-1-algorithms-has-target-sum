// function hasTargetSum(array, target) {
//   // iterate through the array
//   for (let i = 0; i < array.length; i++) {

//     const complement = target - array[i]
//     // iterate through the rest of array
//     for (let j = i + 1; j < array.length; j++) {

//       if (array[j] === complement) return true
//       }
//     }
//       return false
//   }

// function hasTargetSum(array, target) {
//   const seenNumbers = {}
//   for(let i = 0; i < array.length; i++){
//     console.log(seenNumbers)
//     const complement = target - array[i]
//     if (seenNumbers[complement]) return true
//     seenNumbers[array[i]] = true
//   }
//     return false
// }

function hasTargetSum(array, target) {
  const seenNumbers = {}
  for(const number of array){
    console.log(seenNumbers)
    const complement = target - number
    if (complement in seenNumbers) return true
    seenNumbers[number] = true
  }
    return false
}

/* 
  Big O time complexity of "0(n^2)"
*/

/* 
  If any pair of array adds up to the target number "10",
    return true. So we will need to iterate through the numbers to see which two add to the target number.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
