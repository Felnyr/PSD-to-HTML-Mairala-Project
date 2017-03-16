$(document).ready(function(){
    $('.logo').on('click', function(){
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  
    $('.btn-mobile').on('click',function(){
      if($('.nav-top').hasClass('responsive')){
        $('.nav-top').removeClass('responsive')
        c
      }else{
        $('.nav-top').addClass('responsive')
      }
    });
  
    $('.carousel').carousel({
      interval: 2000
    })
});