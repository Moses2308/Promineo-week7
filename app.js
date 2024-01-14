//<<<<<QUESTION ONE>>>>>
console.log("---QUESTION ONE---");
//declaration of array of ages
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//programatically subtract value of the first element in the array from the value in the last
let agesDifference = ages[ages.length - 1] - ages[0];
console.log(agesDifference);

//testing to see if still working when item is added to array
ages.push(19);
agesDifference = ages[ages.length - 1] - ages[0];
console.log(agesDifference);

//looping over the array for average value
let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
const agesAverage = total / ages.length;
console.log(agesAverage);

//<<<<<QUESTION TWO>>>>>
console.log("\n---QUESTION TWO---");
//declaration of array of names
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//loop through array using forEach method to calculate average number of letters per name
let totalLetters = 0;
names.forEach((item) => {
  totalLetters += item.length;
});
const averageLetters = totalLetters / names.length;
console.log(averageLetters);

//loop through array using for of loop to concatinate strings
let namesConcatinated = "";
for (const name of names) {
  namesConcatinated += name + " ";
}
console.log(namesConcatinated);

//<<<<<QUESTION THREE>>>>>
console.log("\n---QUESTION THREE---");
//How do you acccess the last element of an array?
console.log(
  "You use array[array.length-1] to access the last element since it has an index of one less than the length of the array."
);

//<<<<<QUESTION FOUR>>>>>
console.log("\n---QUESTION FOUR---");
//How do you acccess the first element of an array?
console.log(
  "To access the first element of an array you use array[0] since the first elmement in an array has an index of 0"
);

//<<<<<QUESTION FIVE>>>>>
console.log("\n---QUESTION FIVE---");
const nameLengths = [];
for (const name of names) {
  nameLengths.push(name.length);
}
console.log(nameLengths);

//<<<<<QUESTION SIX>>>>>
console.log("\n---QUESTION SIX---");
let nameLengthsSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  nameLengthsSum += nameLengths[i];
}
console.log(nameLengthsSum);

//<<<<<QUESTION SEVEN>>>>>
console.log("\n---QUESTION SEVEN---");
function repeatWord(word, n) {
  let finalWord = "";
  for (let i = 0; i < n; i++) {
    finalWord += word;
  }
  return finalWord;
}

console.log(repeatWord("Hello", 3));

//<<<<<QUESTION EIGHT>>>>>
console.log("\n---QUESTION EIGHT---");

const toFullName = function (fName, lName) {
  return `${fName} ${lName}`;
};
console.log(toFullName("Moses", "Ventura"));

//<<<<<QUESTION NINE>>>>>
console.log("\n---QUESTION NINE---");
const numArray = [23, 21, 6, 50];

const hundredCheck = function (numArray) {
  let sum = 0;
  for (const element of numArray) {
    sum += element;
  }
  if (sum > 100) {
    return true;
  }
  return false;
};

console.log(hundredCheck(numArray));

//<<<<<QUESTION TEN>>>>>
console.log("\n---QUESTION TEN---");
function numArrayAvg(numArray) {
  let sum = 0;
  numArray.forEach((element) => {
    sum += element;
  });
  return sum / numArray.length;
}
console.log(numArrayAvg(numArray));

//<<<<<QUESTION ELEVEN>>>>>
console.log("\n---QUESTION ELEVEN---");
const numArray2 = [21, 14, 22, 70];
function compareTo(array1, array2) {
  let sum1 = 0;
  let sum2 = 0;
  array1.forEach((element) => {
    sum1 += element;
  });

  array2.forEach((element) => {
    sum2 += element;
  });

  if (sum1 > sum2) {
    return true;
  }
  return false;
}

console.log(compareTo(numArray, numArray2));

//<<<<<QUESTION TWELVE>>>>>
console.log("\n---QUESTION TWELVE---");

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

console.log(willBuyDrink(true, 10.75));

//<<<<<QUESTION THIRTEEN>>>>>
console.log("\n---QUESTION THIRTEEN---");

function isPalindrome(userString) {
  //populate initial and reversed array
  const initialState = [];
  for (let i = 0; i < userString.length; i++) {
    initialState.push(userString.charAt(i));
  }
  const reversedState = initialState.toReversed();

  //compare each letter as its lower case
  for (let i = 0; i < initialState.length; i++) {
    if (initialState[i].toLowerCase() !== reversedState[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("RoTator"));
