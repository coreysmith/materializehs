(function($){        
$(window).load(function() {
  
  $('.hs-button').addClass('button waves-light btn waves-effect');
    
    
});


var joined = 0;
$(document).on({
    mousemove: function(){
        if(joined < 5){ //5 for example to be sure that they had time to load all the content inside $(window).load function
            
          $('.hs-button').addClass('button waves-light btn waves-effect');
             
        } else{
            joined++;
        }
    }
}, '.page'); //or some class on body for example
  

})(jQuery);
