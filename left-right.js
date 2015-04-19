$(document).ready(function() {
    var $carouselContainer = $("#carousel-content-container");

    $carouselContainer.owlCarousel({
      items: 3,
      scrollPerPage: true,
      afterInit: function(){

        $carouselContainer.on("keydown", function(e){

          // first of all make sure we override the default keyboard behaviour
          // only for the wrapper and not everything inside it
          if ( $(e.target).is("#carousel-content-container")  ) {

            var code = e.keyCode || e.which;

            if (code === 9) { // tab key detected

              //... code now shown as it has not changed since the previous step

            } else if (code === 39) {
              // arrow right - next slide
              $carouselContainer.data('owlCarousel').next();
            } else if (code === 37) {
              // arrow left - previous slide
              $carouselContainer.data('owlCarousel').prev();
            }

          }

        });
      }
    });
  });
