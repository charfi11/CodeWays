$(window).scroll(function(){
    if ($(document).scrollTop() > 10) {
        $('.navbar').css({'background': 'black','color': 'white', 'transition': '500ms', 'box-shadow': '1px 1px 2px 1px rgba(0,0,0,0.2)'});
    }
    else {
        $('.navbar').css({'background': 'transparent','color': 'black', 'transition': '500ms', 'box-shadow': 'none'});
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

$('#cardp1').mouseover(function(){
   $('.textcard2').show('slow');
});

$('#cardp1').mouseleave(function(){
    $('.textcard2').hide();
 });

 $('#cardp2').mouseover(function(){
    $('.textcard3').show('slow');
 });
 
 $('#cardp2').mouseleave(function(){
     $('.textcard3').hide();
  });

$('.btn1').mouseover(function(){
    $('.text1').hide();
    $('.env1').show();
});

$('.btn1').mouseleave(function(){
    $('.text1').show();
    $('.env1').hide();
});

$('.btn2').mouseover(function(){
    $('.text2').hide();
    $('.env2').show();
});

$('.btn2').mouseleave(function(){
    $('.text2').show();
    $('.env2').hide();
});

$('.btn3').mouseover(function(){
    $('.text3').hide();
    $('.env3').show();
});

$('.btn3').mouseleave(function(){
    $('.text3').show();
    $('.env3').hide();
});