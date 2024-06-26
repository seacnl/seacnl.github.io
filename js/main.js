(function ($) {
$(document).ready(function() {

$('#sendmsg').click(function(e) {

  e.preventDefault();

$("#msganswer").text("");
$("#msganswer").attr("hidden", true);
$("#msganswer").removeClass("alert-danger");
$("#msganswer").removeClass("alert-secondary");

var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();


var args =
 {
   name: name,
   email: email,
   message: message

 };

 var count = 0;

if (name == "")  {count = 1;}
if (email == "")  {count = 1;}
if (message == "")  {count = 1;}


if (count == 0) {
contactus(args).done(function(resp){
  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
  $("#msganswer").text("il messaggio è stato inviato. Grazie!");
  $("#msganswer").addClass("alert-secondary");
  $("#msganswer").attr("hidden", false);
}).fail(function(resp){
  $("#msganswer").text("Si è verificato un errore nell'invio del messaggio. Per favore riprova più tardi");
  $("#msganswer").addClass("alert-danger");
  $("#msganswer").attr("hidden", false);
})
} else {
    $("#msganswer").text("Si prega di compilare i campi obbligatori");
    $("#msganswer").addClass("alert-danger");
    $("#msganswer").attr("hidden", false);
}

})

function contactus(args) {

   return $.ajax({
   url: 'https://forms.un-static.com/forms/47434f77443a9f67e711c18a6942c415e62e541a/ajax',
    type: "POST",
    crossDomain: true,
    dateType: 'json',
    data: JSON.stringify(args),
    headers: {
           'content-type': 'application/json',
             'Access-Control-Allow-Origin': '*',
       }
  });

}
});
})(jQuery);
