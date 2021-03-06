$(document).ready(function() {
  var $carouselContainer = $("#carousel-content-container");

  $carouselContainer.owlCarousel({
    items: 3,
    afterAction: function(){

      // owl carousel's afterAction callback is fired after initialisation
      // and each user interaction with the carousel

      $carouselContainer.on("keydown", function(e){

        // get the code of key pressed
        var code = e.keyCode || e.which;

        if (code === 9) { // tab key detected

          // get all tabbable elements excluding all carousel's contents
          var $tabbable = $(":tabbable").not("#carousel-content-container *");

          // the index of the carousel among all tabbable elements on the page
          var carouselAmongTabbable = $tabbable.index($(this));

          // increment, to get the index of the next tabbable
          var nextTabbableIndex = carouselAmongTabbable+1;

          // access the next tabbable element by its index
          var $nextTabbable = $tabbable.eq(nextTabbableIndex);

          // force focus to the next tabbable element

          // simply $nextTabbable.focus(); doesn't work
          // wrapping into setTimeout does the trick
          setTimeout(function(){
            $nextTabbable.focus();
          });

        }

      });
    }
  });
});
