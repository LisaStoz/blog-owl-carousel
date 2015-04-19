...
afterAction: function(){

  // enter key handling code ... listen in the previous step
  // ...

  // remove previous tab key handlers
  $carouselContainer
    .find('.owl-item').find(':tabbable').off('keydown');

  // add most up-to-date tab handler
  var lastVisible = owl.visibleItems[owl.visibleItems.length-1];
  $carouselContainer
    .find('.owl-item')
    .eq(lastVisible)
    .find(':tabbable').last().on('keydown', function(e){
      var code = e.keyCode || e.which;
      if (code === 9) {
        e.preventDefault();
        setTimeout(function(){
          $carouselContainer.focus();
        });
      }
    });

}
...
