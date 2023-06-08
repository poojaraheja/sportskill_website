// Checks if any particular element is in viewport
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom && elementBottom > viewportTop;
};

var counters_triggered = false;

function openModal(mod_name,popupname) {
    var modal = document.getElementById(mod_name);
    var popup = document.getElementById(popupname);
  
    // Add open class to make visible and trigger animation
    modal.classList.add('open');
    popup.classList.add('open');
    setTimeout(function(){
        $('body').addClass('hideOverflowY')
    },100)
  }
  
  function closeModal(mod_name) {
    var modal = document.getElementById(mod_name);
    // Remove open class to hide and trigger animation
    modal.classList.remove('open');
    $('body').removeClass('hideOverflowY');
    setTimeout(function(){
    $('.popupContent').removeClass('open')
    }, 500)
  }

$(window).on('load', function(){
    $('.popup').css('display','block');
})

$(document).ready(function() {
    window.scrollTo(0, 0);
})

// Animate numbers when scrolled into view
$(window).scroll(function (e) {
    e.stopPropagation();
    e.preventDefault();
    if ($('.counterSection').isInViewport() && !counters_triggered) {
        counters_triggered = true;

        $('.counter span').counterUp({
            delay: 10,
            time: 2000
        });
        $('.counter span').addClass('animated fadeInDownBig');
        $('.mainCounterWrap b').addClass('animated fadeIn');
    }


    if ($('.about-one').isInViewport()) {
        $(".about-one").animate({ "left": "586px" }, 2000).addClass('visible');
    }
    if ($('.about-two').isInViewport()) {
        $(".about-two").animate({ "right": "0" }, 2000).addClass('visible');
    }
    if ($('.about-three').isInViewport()) {
        $(".about-three").animate({ "left": "592" }, 2000).addClass('visible');
    }
});

$(document).ready(function() {
    $('.cards').hover(
      function() {
        $('.content').css('display', 'block');
      },
    );
  });
// var p = 0;
// function moveit() {
//     p += 0.02;

//     var r = 250;
//     var xcenter = 204;
//     var ycenter = 204;

    
//     var newLeft = Math.floor(xcenter + (r* Math.cos(p+72)));
//     var newTop = Math.floor(ycenter + (r * Math.sin(p+72)));
//     var newLeft1 = Math.floor(xcenter + -(r* Math.cos(p+72)));
//     var newTop1 = Math.floor(ycenter + -(r * Math.sin(p+72)));
//     var newLeft2 = Math.floor(ycenter + (r* Math.cos(p+170)));
//     var newTop2 = Math.floor(xcenter + (r* Math.sin(p+170)));
//     var newLeft3 = Math.floor(ycenter + -(r* Math.cos(p+170)));
//     var newTop3 = Math.floor(xcenter + -(r* Math.sin(p+170)));
    
    
//     $('.fitness').animate({
//             top: newTop,
//             left: newLeft,
//         }, 100, function() {
//             moveit()
//                 });
//     $('.video').animate({
//         top: newTop1,
//         left: newLeft1,
//     },100, function() {
//         moveit();
//     });
//     $('.data-analytics').animate({
//         top: newTop2,
//         left: newLeft2,
//     },100, function() {
//         moveit();
//     });
//     $('.goals').animate({
//         top: newTop3,
//         left: newLeft3,
//     },100, function() {
//         moveit();
//     });
//  }