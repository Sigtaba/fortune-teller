$(function() {
  //target the form
  var userInput = [];
  $("#brulesFortune").submit(function(event) {
    event.preventDefault();
    //when a user checks boxes - display results based on value
    //assign the checkboxes to values

    var total = 0;

    $("input:checkbox:checked").each(function() {
      var userInput = parseInt($(this).val());
      total += userInput;

      if (total < 30) {
        $('#wine-response').show();
      } else if ((40 < total) && (total < 60)) {
        $('#yes-response').show();
      } else {
        $('#whocares-response').show();
      }
    });
  });
});
