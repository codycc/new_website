// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$( document ).ready(function() {

$('.wrapper').fadeIn(3000);
$('.wrapper h1').fadeIn(1000);

$('#l1').fadeIn(1000);
$('#l2').fadeIn(1200);
$('#l3').fadeIn(1400);
$('#l4').fadeIn(1600);
$('#l5').fadeIn(1800);
$('#l6').fadeIn(2000);
$('#l7').fadeIn(2200);
$('#l8').fadeIn(2400);
$('#l9').fadeIn(2600);
$('#l10').fadeIn(2800);


$('.triangle2').fadeIn(50);
$('.triangle2').fadeOut(50);
$('.triangle2').fadeIn(100);
$('.triangle2').fadeOut(100);
$('.triangle2').fadeIn(150);
$('.triangle2').fadeOut(100);
$('.triangle2').fadeIn(1000);

  $triggered_times = 0;
  $triggered_educate = 0;



    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 1450;             // set to whatever you want it to be
        var scroll_pos_wrapper = 300;
        var scroll_pos_experience = 1000;
        if(y_scroll_pos > scroll_pos_test && $triggered_times == 0 ) {
          $('#one').fadeIn(100);
          $('#one').fadeOut(100);
            $('#one').fadeIn(3000);
          $('#two').fadeIn(500);
          $('#two').fadeOut(100);
          $('#two').fadeIn(500);
          $('#two').fadeOut(200);
          $('#two').fadeIn(1000);
          $('#three').fadeIn(500);
          $('#three').fadeOut(50);
          $('#three').fadeIn(300);
          $('#three').fadeOut(50);
          $('#three').fadeIn(2000);
          $('#four').fadeIn(3000);
          $('#four').fadeOut(10);
          $('#four').fadeIn(500);
          $('#five').fadeIn(7000);
          $('#six').fadeIn(3000);
          $('#seven').fadeIn(7000);
          $('#seven').fadeOut(100);
          $('#seven').fadeIn(1000);
          $('#eight').fadeIn(4000);
          $('#nine').fadeIn(9000);
          $('#nine').fadeOut(500);
          $('#nine').fadeIn(1000);
          $triggered_times = 1
        }
        if(y_scroll_pos > scroll_pos_wrapper) {
          $('.aboutmewrapper h1').fadeIn(1000);
          $('.aboutmewrapper p').fadeIn(2000);
        }

        if(y_scroll_pos > scroll_pos_experience &&   $triggered_educate == 0 ) {

          $('.education').fadeIn(1000);
          $('.work').fadeIn(2000);
        }

    });


});
