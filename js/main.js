$(function(){
   " use strict";
   $(".protoflio-item ul li").on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
    console.log($(this).data("class"));
    if($(this).data("class")==="all"){
        console.log($(".suffle .col-md "));
        $(".suffle .for-button").parent().fadeIn();
    }else
    if($(this).data("class")===".desigon"){
        $(".suffle .print").parent().fadeIn();
        $($(this).data("class")).parent().fadeOut();
    }
    else if($(this).data("class")===".print"){
        $(".suffle .desigon").parent().fadeIn();
        $($(this).data("class")).parent().fadeOut();
    }
    else if($(this).data("class")===".development"){
        $(".suffle .desigon").parent().fadeIn();
        $($(this).data("class")).parent().fadeOut();
    }
});
                                                                                    
});
