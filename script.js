$(document).ready(function(){
  
//(function() {
const navH = 82;
var about = $('.ct-about').offset().top-navH;
var projects =$('.ct-projects').offset().top-navH;
var members = $('.ct-members').offset().top-navH;
var blog = $('.ct-blog').offset().top-navH;
var contact = $('.ct-contact').offset().top-navH;

window.addEventListener("resize", function(){
  
  about = $('.ct-about').offset().top-navH;
  //console.log(about);
  projects = $('.ct-projects').offset().top-navH;
  //console.log(projects);
  members = $('.ct-members').offset().top-navH;
  //console.log(members);
  blog = $('.ct-blog').offset().top-navH;
  //console.log(blog);
  contact = $('.ct-contact').offset().top-navH;
  //console.log(contact)  
});  

  
  $('.logo, .menu-btn li:nth-child(1)').on('click', function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  $('.menu-btn li:nth-child(2)').on('click', function(){
    $('html, body').animate({ scrollTop: about+1 }, 'slow');
  });
  $('.menu-btn li:nth-child(3)').on('click', function(){
    $('html, body').animate({ scrollTop: projects+1 }, 'slow');
  });
  $('.menu-btn li:nth-child(4)').on('click', function(){
    $('html, body').animate({ scrollTop: members+1 }, 'slow');
  });
  $('.menu-btn li:nth-child(5)').on('click', function(){
    $('html, body').animate({ scrollTop: blog+1 }, 'slow');
  });
  $('.menu-btn li:nth-child(6)').on('click', function(){
    $('html, body').animate({ scrollTop: contact+1 }, 'slow');
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
  
//active scroll

$(document).on('scroll', function(){
  var scroll = $(this).scrollTop()
  //console.log(scroll)
  if(scroll<about){
    $('.menu-btn li a').removeClass('active')
    $('.menu-btn li:nth-child(1) a').addClass('active')
  }else if(scroll>=about&&scroll<projects){
    $('.menu-btn li a').removeClass('active')
    $('.menu-btn li:nth-child(2) a').addClass('active')
  }else if(scroll>=projects&&scroll<members){
    $('.menu-btn li a').removeClass('active')
    $('.menu-btn li:nth-child(3) a').addClass('active')
  }else if(scroll>=members&&scroll<blog){
    $('.menu-btn li a').removeClass('active')
    $('.menu-btn li:nth-child(4) a').addClass('active')
  }else if(scroll>=blog&&scroll<contact){
    $('.menu-btn li a').removeClass('active')
    $('.menu-btn li:nth-child(5) a').addClass('active')
  }else if(scroll>=contact){
    $('.menu-btn li a').removeClass('active')
    $('.menu-btn li:nth-child(6) a').addClass('active')
  }
});
  
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
//})();
});




//script for skills animation

/*

function count(){  
  var a = 0;
  setInterval(function(){
    if(a<200){
     a++
     console.log(a) 
    }
  },30);
}
count()

*/