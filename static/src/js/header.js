$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.tonavbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    })

// header active

var selector = '.tonavbar ul li';
    var url = window.location.href;
    var target = url.split('/');
     $(selector).each(function(){
        if($(this).find('a').attr('href')===('/'+target[target.length-1])){
          $(selector).removeClass('activepage');
          $(this).removeClass('activepage').addClass('activepage');
        }
     });

//home banner
$(".banner-text3")

$(document).ready(function() {
  
  var n = -1 
  , imgs = $("#top-banner-home .fade-img")
  , fx = function(i, el) {
      return (el || imgs.eq(i)).fadeToggle(3000);
    };
  
  $(".banner-text3").click(function() {

    if (n === (-imgs.length)) {
      fx(n);
      n = -1;
      fx(null, imgs);
    } else {
      fx(n);
      --n
    };
    
  });
  
});
// banner before navbar 
     var selector = '.tonavbar .aboutus-link';
    var url = window.location.href;
    var target = url.split('/');
     $(selector).each(function(){
        if($(this).find('a').attr('href')===('/'+target[target.length-1])){
            document.getElementById("top-banner-aboutus").style.display = "block";
            document.getElementById("top-banner-home").style.display = "none";
        }
     });
    
      var selector = '.tonavbar .thebadge-link';
      var url = window.location.href;
      var target = url.split('/');
       $(selector).each(function(){
          if($(this).find('a').attr('href')===('/'+target[target.length-1])){
              document.getElementById("top-banner-thebadge").style.display = "block";
              document.getElementById("top-banner-home").style.display = "none";
          }
       });

       var selector = '.tonavbar .product-link';
      var url = window.location.href;
      var target = url.split('/');
       $(selector).each(function(){
          if($(this).find('a').attr('href')===('/'+target[target.length-1])){
              document.getElementById("top-banner-home").style.display = "none";
          }
       });

       var selector = '.tonavbar .process-link';
      var url = window.location.href;
      var target = url.split('/');
       $(selector).each(function(){
          if($(this).find('a').attr('href')===('/'+target[target.length-1])){
              document.getElementById("top-banner-home").style.display = "none";
          }
       });

       var selector = '.tonavbar .contactus-link';
      var url = window.location.href;
      var target = url.split('/');
       $(selector).each(function(){
          if($(this).find('a').attr('href')===('/'+target[target.length-1])){
              document.getElementById("top-banner-home").style.display = "none";
          }
       });
