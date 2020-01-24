$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    console.log("button submit");
    var number = parseInt($("#numberInput").val());
    console.log(number);
  });
});
