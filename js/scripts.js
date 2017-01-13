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

    if (track === 5) {
      location.href="answers.html";
      $(".ruby").show();
    } else if (track === 10) {
      location.href="answers.html";
      $(".php").show();
    } else if (track == 15) {
      location.href="answers.html";
      $(".java").show();
    } else if (track === 20) {
      location.href="answers.html";
      $(".css").show();
    } else if (total === 25) {
      location.href="answers.html";
      $(".cnet").show();
    }
  })
})
