$(document).ready(function() {
  // Front end
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());
    addNumber(number);
  });

  //Backend
  var counter = 0;
  var numbers = [0];
  function addNumber(number) {
    counter ++;
    numbers.push(counter);
    while (number > counter) {
      addNumber(counter);
    }
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      splitNumber(numbers[i])
      // const element = array[i];
    }
    function splitNumber(number){
      console.log(String(number))
      var stringNumber = String(number).split("")
      console.log(stringNumber)
    }
  }

});
