var __widthMobile = 1000;
var __widthMobileTablet = 820;
var __widthMobileMobile = 540;
var __isMobile = ($(window).width() <= __widthMobile);
var __isMobileTablet = ($(window).width() <= __widthMobileTablet);
var __isMobileMobile = ($(window).width() <= __widthMobileMobile);
var __animationSpeed = 350;

function initElements(element) {
	$element=$(element ? element : 'body');

	$(window).on('resize', function(){
		onResize();
	});
}
function onResize() {
	__isMobile = ($(window).width() <= __widthMobile);
	__isMobileTablet = ($(window).width() <= __widthMobileTablet);
	__isMobileMobile = ($(window).width() <= __widthMobileMobile);
}

function scrollReset() {
	$('html, body').scrollTop(0);
}

function _scrollTo(target, offset) {
	var wh = $(window).height();
	if (typeof(offset) == 'undefined') offset =- Math.round(wh/2);
	else if (offset === false) offset = 0;
	$('html, body').animate({
		scrollTop: $(target).offset().top + offset
	}, 1000);
}

(function ($) {
	$(function () {
		initElements();
		onResize();

		if (typeof(WOW) != 'undefined') {
			new WOW().init();
		}

		$('.js-anchor').click(function(e) {
			e.preventDefault();
			_scrollTo($(this).attr('href'), -$(window).height()/12);
		});
	})
})(jQuery)