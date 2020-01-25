$(document).ready(function() {
  // Front end
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());
    submitDocument(number);
  });

  //Back end
  function submitDocument(number) {
    var numberArray = addNumber(number);
    convertedArray = numbers.map(function(number) {
      return splitCompare(number);
    });
    printToDom(convertedArray);
  }
  var counter = 0;
  var numbers = [0];
  function addNumber(number) {
    while (number > counter) {
      counter++;
      numbers.push(counter);
    }
    return numbers;
  }
  function splitCompare(number) {
    var stringNumberArray = String(number).split("");
    var stringNumber = String(number);
    for (let i = 0; i < stringNumberArray.length; i++) {
      if (stringNumberArray[i] === "3") {
        stringNumber = "I'm sorry, Dave. I'm afraid I can't do that.";
        return stringNumber;
      } else if (stringNumberArray[i] === "2") {
        stringNumber = "Boop";
      } else if (stringNumberArray[i] === "1" && stringNumber != "Boop") {
        stringNumber = "Beep";
      }
    }
    return stringNumber;
  }
  function printToDom(mutatedArray) {
    $("#result").append(mutatedArray);
  }
});
