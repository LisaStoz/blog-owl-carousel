...

afterAction: function(){

  // owl carousel's afterAction callback is fired after every user interaction
  // and also after initialisation

  var owl = this.owl;

  $carouselContainer.on("keydown", function(e){

    var code = e.keyCode || e.which;

    if (code === 13) { // enter key detected

      // enter - focus on first tabbable element in the visible slide
      setTimeout(function(){
        $carouselContainer.find('.owl-item').eq(owl.currentItem).find(':tabbable').focus();
      });

    }

  });
}
...
