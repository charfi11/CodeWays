$(window).scroll(function(){
    if ($(document).scrollTop() > 10) {
        $('.navbar').css({'background': 'black','color': 'white', 'transition': '500ms', 'box-shadow': '1px 1px 2px 1px rgba(0,0,0,0.2)'});
        $('.fa-bars').css({'background': 'rgb(0,0,0,0.9)', 'transition': '300ms', 'color': 'white', 'padding': '1%', 'left': '2%'});
        $('.logoa').css({'color': 'white', 'transition': '500ms'});
    }
    else {
        $('.navbar').css({'background': 'rgba(0, 0, 0, 0.5)','color': 'white', 'box-shadow': 'none'});
        $('.fa-bars').css({'background': 'transarent', 'transition': '300ms', 'color': 'black', 'padding': '0', 'left': '40%'});
        $('.logoa').css({'color': 'white', 'transition': '500ms'});
    }
});

$(window).scroll(function(){
    if($(document).scrollTop() > 10){
        $('.left').css({'background': 'black', 'transition': '1s'});
        $('.right').css({'background': 'white', 'transition': '1s'});
        $('.sk').css({'color': 'black', 'transition': '1s'});
        $('.right').addClass('effect');
        $('.right').addClass('m');
        $('.left').addClass('effect2');
        $('.arrowr').css({'border-color': 'black', 'transition': '500ms'});
        $('.fa-arrow-right').css({'color': 'black', 'transition': '500ms'});
    }
});

$(window).scroll(function(){
    if($(document).scrollTop() > 10){
        $('.triangle').addClass('down2');
    }
});

$(window).scroll(function(){  
    if($(document).scrollTop() > 10){
        $('.right').css({'background': 'white', 'transition': '500ms'});
    }
    else {
        $('.right').css({'background': 'yellow', 'transition': '500ms'});
    }
});

$(window).scroll(function(){  
    if($(document).scrollTop() > 10){
        $('.left').css({'background': 'black', 'transition': '500ms'});
    }
    else {
        $('.left').css({'background': 'white', 'transition': '500ms'});
    }
});

$(window).scroll(function(){
    if($(document).scrollTop() > 50){
        $('.vl').addClass('down4');
        $('.vl2').addClass('down4');
        $('.vl3').addClass('down4');
        $('.vl4').addClass('down4');
    }
    else {
        $('.vl').removeClass('down4');
        $('.vl2').removeClass('down4');
        $('.vl3').removeClass('down4');
        $('.vl4').removeClass('down4');
    }
});

$(window).scroll(function(){
   if($(document).scrollTop() > 910){
       $('.blocktv').addClass('down');
       $('.blockrun').addClass('down2');
       $('.blockdata').addClass('down3');
   }
   else {
    $('.blocktv').removeClass('down');
    $('.blockrun').removeClass('down2');
    $('.blockdata').removeClass('down3');
   }
});

$(".up").click(function() {
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
  });

$(".compet").click(function() {
    $('html,body').animate({
        scrollTop: $(".skills").offset().top},
        'slow');
});


$(".arrowr").click(function() {
    $('html,body').animate({
        scrollTop: $(".skills").offset().top},
        'slow');
  });

$(".serv").click(function() {
    $('html,body').animate({
        scrollTop: $(".services").offset().top},
        'slow');
});

$(".port").click(function() {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
});

$(".cont").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});

$('.litimes').click(function(){
    $('.navnav').hide('fast');
});

$(window).resize(function(){
    var width = $(window).width();
if( width > 500 ) {
    $('.navnav').show();
}
});

$(document).ready(function(){
    $(window).resize(function(){
var width = $(window).width();
if( width < 450 ) {
$('.compet').click(function(){
    $('.navnav').hide('fast');
});
$('.serv').click(function(){
    $('.navnav').hide('fast');
});
$('.port').click(function(){
    $('.navnav').hide('fast');
});
$('.cont').click(function(){
    $('.navnav').hide('slow');
});
}
});
});

$('.fa-bars').click(function(){
    $('.navnav').show('fast');
});

$('.vl').click(function(){
    $('.vl').addClass('barre');
    $('.blockvl').slideDown('slow');
    $('.vlp').hide('slow');
});

$('.close').click(function(){
    $('.blockvl').slideUp();
    $('.vl').removeClass('barre');
    $('.vlp').show();
});

$('.vl2').click(function(){
    $('.vl2').addClass('barre');
    $('.blockvl2').slideDown('slow');
    $('.jq').hide('slow');
});

$('.close').click(function(){
    $('.blockvl2').slideUp();
    $('.vl2').removeClass('barre');
    $('.jq').show();
});

$('.vl3').click(function(){
    $('.vl3').addClass('barre');
    $('.blockvl3').slideDown('slow');
    $('.sym').hide('slow');
});

$('.close').click(function(){
    $('.blockvl3').slideUp();
    $('.vl3').removeClass('barre');
    $('.sym').show();
});

$('.vl4').click(function(){
    $('.vl4').addClass('barre');
    $('.blockvl4').slideDown('slow');
    $('.cms').hide('slow');
});

$('.close').click(function(){
    $('.blockvl4').slideUp();
    $('.vl4').removeClass('barre');
    $('.cms').show();
});

$(document).on('submit', '.contact', function(event){
        event.preventDefault();

  $.ajax({
    type: 'post',
    url: $(this).attr( 'action' ),
    success:function(){
        $('.txtbtn').hide();
        $('.btn').css('background', '#f88379');
        $('.btn').html("<div class='spinner-border text-light' role='status'></div>");
        setTimeout(function(){  
            $('.spinner-border').hide();
            $('.btn').html("<i class='fas fa-check-circle'></i>");
            $('.fa-check-circle').show('slow');
     }, 2000);
            setTimeout(function(){ location.reload(); }, 3000)
    }
});
});