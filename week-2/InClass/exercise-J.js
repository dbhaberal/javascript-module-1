function secondMatchesAmy(array) {
  if (array[1] === 'Amy') {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(['Bob', 'Amy', 'Alice']))
console.log(secondMatchesAmy(['Bob', 'Alice', 'Amy']))