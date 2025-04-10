function fakeBin(x){
  //Create an array to hold the new string
  let result = "";
  //Setup a for loop that iterates through the string
  for (let i = 0; i < x.length; i++) {
    //Check if the current iteration is less than 5, and add a "0" to the result string if so
    if (x[i] < 5) {
      result += 0;
      //Check if the current iteration is 5 or more, and add a "1" to the result string if so
    } else if (x[i] >= 5){
      result += 1;
    }
  }
  return result;
}