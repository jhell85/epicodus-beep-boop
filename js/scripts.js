$(document).ready(function() {
  // Front end
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    var name = $("#nameInput").val();
    submitDocument(numberInput, name);
  });

  //Back end
  var counter = 0;
  var numbers = [0];
  
  function submitDocument(numberInput, name) {
    numbers = [0];
    counter = [0]
    if (name === ""){
      name = generateName()
    }
    addNumber(numberInput);
    convertedArray = numbers.map(function(number) {
      return splitCompare(number, name);
    });
    printToDom(convertedArray);
  }
  function addNumber(numberInput) {
    while (numberInput > counter) {
      counter++;
      numbers.push(counter);
    }
    return numbers;
  }
  function splitCompare(number, name,) {
    var stringNumberArray = String(number).split("");
    var stringNumber = String(number);
    for (let i = 0; i < stringNumberArray.length; i++) {
      if (stringNumberArray[i] === "3") {
        stringNumber = `I'm sorry, ${name} I'm afraid I can't do that!`;
        return stringNumber;
      } else if (stringNumberArray[i] === "2") {
        stringNumber = "Boop";
      } else if (stringNumberArray[i] === "1" && stringNumber != "Boop") {
        stringNumber = "Beep";
      }
    }
    return stringNumber;
  }
  function generateName() {
    var randomNames = ["Nikol Whitebeard", "Charming Deanna Grey", "Cutthroat Anton The Charming", "First Mate Deanna The Stable", "First Mate Travis The Intuitive", "Cap'n Intuitive", "Gracious Brooke The Pirate", "Joss Gingerbeard", "Joss De Portland" ]
    return randomNames[Math.floor(Math.random() * 11)];

  }
  function printToDom(mutatedArray) {
    $("#result-div").empty();
    $(".result-list").remove();
    $("#result-div").removeClass("text-center");
    $("#result-div").append("<ol class='result-list' start='0'></ol>");
    mutatedArray.forEach(number => {
      $("#result-div ol").append("<li>" + number + "</li>");
    });
  }
});
