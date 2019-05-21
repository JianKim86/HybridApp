$(document).on('click','#img_univ', function(){

    var className= $(this).attr('class');

    if( className=="small"){
        $(this).removeClass("small");
        $(this).addClass("large");
    }else{
        $(this).removeClass("large");
        $(this).addClass("small");        
    }
});