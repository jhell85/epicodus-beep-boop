$(document).ready(function() {
  // Front end
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());
    addNumber(number);
  });

  //Back end
  var counter = 0;
  var numbers = [0];
  function addNumber(number) {
    while (number > counter) {
      counter++;
      numbers.push(counter);
    }
    convertedArray = numbers.map(function(number) {
      return splitCompare(number);
    });
    console.log(convertedArray);
  }
  function splitCompare(number) {
    var stringNumberArray = String(number).split("");
    var stringNumber = String(number);
    console.log(stringNumber)
    for (let i = 0; i < stringNumberArray.length; i++) {
      if (stringNumberArray[i] === "3") {
        stringNumber = "I'm sorry, Dave. I'm afraid I can't do that.";
        return stringNumber;
      } else if (stringNumberArray[i] === "2") {
        stringNumber = "Boop";
        return stringNumber;
      } else if (stringNumberArray[i] === "1") {
        stringNumber = "Beep";
        return stringNumber;
      }
    }
  return stringNumber
  }
});
