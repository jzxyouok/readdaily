 $(document).ready(function(){
  function todetail(){
    var length=51;
          for( var i=1;i<length;i++)
          {
            $('#div'+i).click(function(){
              var url=$(this).data('href');
              window.location.href=url;
            });
          }
    }
   todetail();
  	$('.scroll-top').click(function(){
       $('body,html').animate({scrollTop:0},1000);}) 	
   
  if($(window).width()>768){
    $.getScript("http://v3.jiathis.com/code_mini/jiathis_r.js?uid=1405995817902311&type=left&amp;move=0");
  }
  /* scroll-top button */
   $(window).scroll(function(){
    if(parseFloat($(window).scrollTop())>=100 && $(window).width()>768){
          $('.scroll-top').fadeIn();
        }
    else{
          $('.scroll-top').fadeOut();
    }
    todetail();
  });

      /* smooth scrolling sections */
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 65
        }, 1000);
        return false;
      }
    }
});    
  })