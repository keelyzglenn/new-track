// Backend


// Frontend
$(document).ready(function() {
  $("form#track").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
    var q4 = parseInt($("input:radio[name=q4]:checked").val());
    var q5 = parseInt($("input:radio[name=q5]:checked").val());
    var track = q1 + q2 + q3 + q4 + q5 ;

    if (track >= 6 && track <= 9) {
      $(".ruby").show();
      location.href="ruby.html"
    } else if (track >= 10 && track <= 13) {
      $(".java").show();
      location.href="java.html";
    } else if (track >= 13 && track <= 16) {
      $(".cnet").show();
      location.href="c.html";
    }
  });

  $("form#userName").submit(function(event) {
    var name = $("#name").val();
    var result= "Hello " + name + " " + "based on your answers, your suggested track is...";
    $(".result").text(result);
  });
});
