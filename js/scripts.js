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
    counter += 1;
    numbers.push(counter);
    console.log(numbers);
    while (number > counter) {
      addNumber(counter);
    }
  }
  
});
