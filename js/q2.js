let nums = [2, 2, 1, 1, 4, 5, 5, 7];

function singleNumberInArray(array) {
  let singleNumbersArray = [];
  for (let index = 0; index < array.length; index++) {
    let count = 0;
    array.forEach((element) => {
      if (element === array[index]) {
        count += 1;
      }
    });
    if (count === 1) {
      singleNumbersArray.push(array[index]);
    }
  }
  return singleNumbersArray;
}

console.log(singleNumberInArray(nums));
