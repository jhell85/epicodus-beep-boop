// Front end
$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    var name = $("#nameInput").val();
    submitDocument(numberInput, name);
  });
});

function printToDom(mutatedArray) {
  $("#result-div").append("<ol class='result-list' start='0'></ol>");
  mutatedArray.forEach(number => {
    $("#result-div ol").append("<li>" + number + "</li>");
  });
}
//Back end
var counter = 0;
var numbers = [0];
function submitDocument(numberInput, name) {
  $("#startContainer").addClass("none");
  $("#results").removeClass("none");
  $("body").removeClass("start");
  if (name === ""){
    name = generateName();
  }
  var numbers = addNumber(numberInput);
  var convertedArray = numbers.map(function(number) {
    return splitCompare(number, name);
  });
  printToDom(convertedArray);
}

function addNumber(numberInput) {
  var counter = 0;
  var numbers = [0];
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
  var randomNames = ["Nikol Whitebeard", "Charming Deanna Grey", "Cutthroat Anton The Charming", "First Mate Deanna The Stable", "First Mate Travis The Intuitive", "Cap'n Intuitive", "Gracious Brooke The Pirate", "Joss Gingerbeard", "Joss De Portland" ];
  return randomNames[Math.floor(Math.random() * 10)];
}