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
      splitCompare(number);
    });
    console.log(convertedArray)
  }
  function splitCompare(number) {
    var stringNumber = String(number).split("");
    for (let i = 0; i < stringNumber.length; i++) {
      if (stringNumber[i] === "3") {
        stringNumber = "I'm sorry, Dave. I'm afraid I can't do that.";
        console.log(stringNumber);
        break;
      } else if (stringNumber[i] === "2") {
        stringNumber = "Boop";
        console.log(stringNumber);
        break;
      } else if (stringNumber[i] === "1") {
        stringNumber = "Beep";
        console.log(stringNumber);
        break;
      }
    }
  }
});
