function numGame(numOne, numTwo, numThree, numFour){
    var num = (numOne + numTwo) * (numThree + numFour);
    if (num > 50){
      console.log("The number is greater than 50!");
    } else {
      console.log("The number is less than 50!");
    }
  }
  
  numGame(1, 2, 3, 4);
  numGame(3, 4, 5, 6);