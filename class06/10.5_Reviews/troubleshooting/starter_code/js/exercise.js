jQuery(document).ready(function(){
    
    jQuery(".breedContainer .toggler").on("click",function(){


    	jQuery(".breedContainer").removeClass("breedContainerLG");
        jQuery(this).parent().toggleClass("breedContainerLG");
        
        if(jQuery(this).attr('src') == "img/gray_x.png"){
            jQuery(this).attr('src',"img/gray_plus.png");
        }else{
            jQuery(this).attr('src',"img/gray_x.png");
        }



    });


});