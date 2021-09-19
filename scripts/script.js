window.onload = function () {
	let open = false;
	let isGridAnimationActive = false;
	$(".nav__link-skills").click(() => {scrollTo("skills")});
	$(".nav__link-about-me").click(() => {scrollTo("about-me")});
	$(".nav__link-portfolio").click(() => {scrollTo("portfolio")});
	$(window).scroll(() => {
		scrollEvent("section__title-1", "section__title_is-active");
		scrollEvent("section__title-2", "section__title_is-active");
		scrollEvent("section__title-3", "section__title_is-active");
		for (var i = 1; i < 15; i++) {
			scrollEvent("grid__item" + "-" + i, "scroll-animation_active");
		}
		for (var a = 1; a < 7; a++) {
			scrollEvent("about-me__block" + "-" + a, "scroll-animation_active");
		}
		if (open) {
			closeMenu();
		}
	});
	$(".menu-button").click(() => {
		if (!open) {
			openMenu();
		} else {
			closeMenu();
		}
	});
	$(".grid__item-1").click(() => {animate("grid__item-1")});
	$(".grid__item-2").click(() => {animate("grid__item-2")});
	$(".grid__item-3").click(() => {animate("grid__item-3")});
	$(".grid__item-4").click(() => {animate("grid__item-4")});
	$(".grid__item-5").click(() => {animate("grid__item-5")});
	$(".grid__item-6").click(() => {animate("grid__item-6")});
	$(".grid__item-7").click(() => {animate("grid__item-7")});
	$(".grid__item-8").click(() => {animate("grid__item-8")});
	$(".grid__item-9").click(() => {animate("grid__item-9")});
	$(".grid__item-10").click(() => {animate("grid__item-10")});
	$(".grid__item-11").click(() => {animate("grid__item-11")});
	$(".grid__item-12").click(() => {animate("grid__item-12")});
	$(".grid__item-13").click(() => {animate("grid__item-13")});
	$(".grid__item-14").click(() => {animate("grid__item-14")});
	$(".grid__item-15").click(() => {animate("grid__item-15")});
	function openMenu() {
		$(".nav__list").addClass("nav__list_is-active");
		$(".menu-button").addClass("menu-button_is-active");
		open = true;
	}
	function closeMenu() {
		$(".nav__list").removeClass("nav__list_is-active");
		$(".menu-button").removeClass("menu-button_is-active");
		open = false;
	}
	function scrollEvent(className, newClassName) {
		if ($("html").scrollTop() > $("." + className).offset().top - $(window).height() - 100) {
			$("." + className).addClass(newClassName);
		}
	}
	function scrollTo(className) {
		$('html, body').animate({
        	scrollTop: $('.' + className).offset().top
    	}, 1500);
    	if (open) {
    		closeMenu();
    	}
	}
	function animate(className) {
		if (!isGridAnimationActive) {
			let animation = (Math.round(Math.random() * 10) > 5) ? "shake" : "rotate";
			$(".skills " + "." + className + " .grid__item-image").addClass("grid__item_click-" + animation + "-animation");
			isGridAnimationActive = true;
			setTimeout( () => {
				$("." + className + " .grid__item-image").removeClass("grid__item_click-" + animation + "-animation");
				isGridAnimationActive = false; 
			}, 500);

		}
	}
}