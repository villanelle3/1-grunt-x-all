window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

$(document).ready(function(){
    $(window).resize(function(){
        var width = $(window).width();
        if(width <= 959 && width >= 768 ){
            $('.item').removeClass('col-md-4').addClass('col-md-6');
        }
        else{
            $('.item').removeClass('col-md-6').addClass('col-md-4');
        }
    });

    $('.btn-menu').click(function () {
        $(this).toggleClass('active');
        $("#nav-container").slideToggle();
    });

})
