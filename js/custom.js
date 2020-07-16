
    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
   
   //CAROSEL
    $('.carousel').carousel({
      interval: 2000,
    });

    // // MENU
    // $('.navbar-collapse a').on('click',function(){
    //   $(".navbar-collapse").collapse('hide');
    // });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("scrolled");
          } else {
            $(".navbar").removeClass("scrolled");
          }
    });

  $(document).on('ready', function () {
    // initialization of show animations
    $('.js-animation-link').each(function () {
      var showAnimation = new HSShowAnimation($(this)).init();
    });
  });

  //read more
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }