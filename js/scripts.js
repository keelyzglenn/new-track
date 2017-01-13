// Backend


// Frontend
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
    var q4 = parseInt($("input:radio[name=q4]:checked").val());
    var q5 = parseInt($("input:radio[name=q5]:checked").val());
    var track= q1 + q2 + q3 + q4 + q5 ;

    if (track total >= 5 && <= 8) {
      $(".ruby").show();
    } else if (total >= 9 && <= 11) {
      $(".php").show();
    } else if (total >= 12 && <= 14) {
      $(".java").show();
    } else if (total >= 14 && <= 16) {
      $(".cnet").show();
    }
  });
});
