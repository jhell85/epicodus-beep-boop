$(document).ready(function() {

  // Front end 
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());
    arrayCount(number)
  });

  //Backend 
  function arrayCount(number) {
    console.log("arrayCount")

  }
});
