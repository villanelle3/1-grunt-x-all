console.log("arquivo2");

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


$('.btn-menu').click(function () {
    $(this).toggleClass('active');
});
