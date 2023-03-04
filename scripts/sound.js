$(document).ready(function() {
    $(".sound").click(function(){
        if (!$(this).hasClass("playing")){
            $(this).addClass("playing")
            $(".main-music")[0].play()
        } else {
            $(this).removeClass("playing")
            $(".main-music")[0].pause()
        } 

    })
});
