$(document).ready(function() {
  $("#animalform").submit(function(event){
    var animalInput = $("#animal").val();
    if (animalInput === "Lion") {
      $("#lion").show();
      $("#tiger").hide();
      $("#fox").hide();
    }
    else if (animalInput === "Tiger") {
      $("#tiger").show();
      $("#lion").hide();
      $("#fox").hide();

    }
    else {
      $("#fox").show();
      $("#lion").hide();
      $("#tiger").hide();
    }
    event.preventDefault();
  });
});
