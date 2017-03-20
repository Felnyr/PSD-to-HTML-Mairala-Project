$(document).ready(function(){
    $('.logo').on('click', function(){
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  
    $('.btn-mobile').on('click',function(){
      if($('.nav-top').hasClass('responsive')){
        $('.nav-top').removeClass('responsive')

      }else{
        $('.nav-top').addClass('responsive')
      }
    });
  
    $('.carousel').carousel({
      interval: 2000
    })
    
function draw1(){
  var ctx = document.getElementById('MarkCanvas').getContext('2d');
  MarkCanvas.width = MarkCanvas.height = 120;
  ctx.arc(60,60,55,-1.57,2.83,false);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 4;
  ctx.stroke();
}
function draw2(){
  var ctx = document.getElementById('ResCanvas').getContext('2d');
  ResCanvas.width = ResCanvas.height = 120;
  ctx.arc(60,60,55,-1.57,3.77,false);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.stroke();
}
function draw3(){
  var ctx = document.getElementById('ManageCanvas').getContext('2d');
  ManageCanvas.width = ManageCanvas.height = 120;
  ctx.arc(60,60,55,-1.57,4.08,false);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.stroke();
}  
function draw4(){
  var ctx = document.getElementById('ConsCanvas').getContext('2d');
  ConsCanvas.width = ConsCanvas.height = 120;
  ctx.arc(60,60,55,-1.57,3.77,false);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.stroke();
}
function draw5(){
  var ctx = document.getElementById('PromCanvas').getContext('2d');
  PromCanvas.width = PromCanvas.height = 120;
  ctx.arc(60,60,55,-1.57,2.83,false);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.stroke();
}    
function drawCanvas(){
  draw1();
  draw2();
  draw3();
  draw4();
  draw5();
}
window.onload = drawCanvas();

});