const target = document.getElementById('header');
var stopScroll = false;
var lastScrollTop = 70;

window.addEventListener('scroll', function() {   

    var scrollAtual = window.scrollY;

    if (scrollAtual > lastScrollTop) {      
        target.classList.add('scrollHide'); 
    } else {
        target.classList.remove('scrollHide');
        }
        lastScrollTop = scrollAtual;
});
