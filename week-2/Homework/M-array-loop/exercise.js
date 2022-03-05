/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function startingWithT(words){
  for(let i = 0; i < words.length; i++) {
    if (words[i][0] === "T") {
      console.log(words[i]);
    }
  }
}

startingWithT(daysOfWeek)