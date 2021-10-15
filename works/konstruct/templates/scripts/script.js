window.onload = function() {	
	$(".header__button").click(function() {
		$(".header__nav-mobile").addClass("header__nav-mobile_active");
		$("body").css("overflow", "hidden");
	});
	$(".menu__button").click(function() {
		$(".header__nav-mobile").removeClass("header__nav-mobile_active");
		$("body").css("overflow", "auto");
	});
}