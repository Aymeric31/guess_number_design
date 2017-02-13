$( document ).ready(function(){
  var progressbar = $( "#progressbar-5" );
  progressLabel = $( ".progress-label" );
  $( "#progressbar-5" ).progressbar({
   value: false,
   change: function() {
    progressLabel.text( 
     progressbar.progressbar( "value" ) + "%" );
  },
  complete: function() {
    progressLabel.text( "Loading Completed!" );
  }
});
  function progress() {
   var val = progressbar.progressbar( "value" ) || 0;
   progressbar.progressbar( "value", val + 1 );
   if ( val < 99 ) {
    setTimeout( progress, 100 );
  }
}
setTimeout( progress, 2000 );

var n = Math.floor(Math.random() * 9);
var essai = Number(3);
var fork = 'Choisis entre 0 et 9!';
alert("Devine combien j'ai de chope derrière mon comptoir ?")


while (essai > 0) {
  var devine = prompt(fork +' Tu as ' + essai + ' essais.');
  if (!devine) break;
  guess = Number(devine);
  if (devine == n) {
    alert("GG");
    essai = 0;
  } else {
    fork = 'Nope.';
    if (devine < n) fork += ' Trop petit !';
    if (devine > n) fork += ' Trop grand !';
    essai = essai - 1;
  }
}
alert('Le chiffre était ' + n );
$(".dialog-box").html("mon bar est triste");
});
