$( document ).ready(function() {
    console.log( "ready!" );
    $('.menu__icon').click(function(){
        $('body').toggleClass('menu_shown');
      });
   

});