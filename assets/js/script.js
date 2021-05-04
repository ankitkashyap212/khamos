$( document ).ready(function() {

$( ".hamburger" ).click(function() {
$( ".header-bottom" ).slideToggle( "slow", function() {
$( ".header-bottom" ).show();
$( ".hamburger" ).hide();
$( ".cross" ).show();

});
});

$( ".cross" ).click(function() {
$( ".header-bottom" ).slideToggle( "slow", function() {
$( ".header-bottom" ).hide();
$( ".hamburger" ).show();
$( ".cross" ).hide();
});
});

});