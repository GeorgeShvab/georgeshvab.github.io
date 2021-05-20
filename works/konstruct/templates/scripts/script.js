window.onload = function() {	
	$(".header__button").click(function() {
		$(".header__nav-mobile").css("display", "block");
		$("body").css("overflow", "hidden");
	});
	$(".menu__button").click(function() {
		$(".header__nav-mobile").css("display", "none");
		$("body").css("overflow", "auto");
	});
}