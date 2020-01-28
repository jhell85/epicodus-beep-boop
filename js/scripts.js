$(document).ready(function() {
  // Front end
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());
    submitDocument(number);
  });

  //Back end
  var counter = 0;
  var numbers = [0];
  function submitDocument(number) {
    numbers = [0];
    counter = [0];
    addNumber(number);
    convertedArray = numbers.map(function(number) {
      return splitCompare(number);
    });
    printToDom(convertedArray);
  }
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
    $(".result-list").remove();
    divResults = Math.ceil(counter / 25);
    divCounter = 1;
    while (divResults > divCounter) {
      console.log("divResults : "+ divResults +" divCounter : "+ divCounter)
      if (counter <= 25) {
        console.log("if Ran");
        $("#result-div").append(
          "<ol class='result-list col-3'id='results0' start='" + 0 + "'></ol>"
        );
        for (let i = 0; i <= counter; i++) {
          $("#results0").append("<li>" + mutatedArray[i] + "</li>");
        }
      } else if (divCounter < divResults) {
        if (divCounter === 1 ){
          var indexStart = divCounter;
        } else {
          var indexStart = divCounter * 25;
        }
        console.log("I ran");
        $("#result-div").append(
          "<ol class='result-list col-3'id='results" +
            indexStart +
            "' start='" +
            indexStart +
            "'></ol>"
        );
        for (let i = indexStart; i <= indexStart + 25; i++) {
          $("#results" + indexStart + "").append(
            "<li>" + mutatedArray[i] + "</li>"
          );
        }
      } else {
        var indexStart = divCounter * 25;
        console.log("I ran");
        $("#result-div").append(
          "<ol class='result-list col-3'id='results" +
            indexStart +
            "' start='" +
            indexStart +
            "'></ol>"
        );
        for (let i = indexStart; i <= counter + 24; i++) {
          $("#results" + indexStart + "").append(
            "<li>" + mutatedArray[i] + "</li>"
          );
        }
      }
      divCounter++;
    }
  }
});
