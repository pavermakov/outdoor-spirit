jQuery(document).ready(function(){
    var navOffset =  jQuery(".scrolling#side_bar").offset().top;
    
    jQuery(window).scroll(function(){
        var scrollPos = jQuery(window).scrollTop();
        
        if(scrollPos >= navOffset-10){
            jQuery(".scrolling#side_bar").addClass("fixed");
        } else {
            jQuery(".scrolling#side_bar").removeClass("fixed");
        }
    });
    
    
});