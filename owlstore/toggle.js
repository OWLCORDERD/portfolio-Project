const button = document.querySelector('.menu-toggle');
const list = document.querySelector('.navbar-menu');

$(button).click(function(){
    $(this).toggleClass("active");
    $(list).toggleClass("active");
});