window.onload = function () {
	let open = false;
	$(".nav__link-skills").click(() => {scrollTo("skills")});
	$(".nav__link-about-me").click(() => {scrollTo("about-me")});
	$(".nav__link-portfolio").click(() => {scrollTo("portfolio")});
	$(window).scroll(() => {
		scrollEvent("section__title-1", "section__title_is-active");
		scrollEvent("section__title-2", "section__title_is-active");
		scrollEvent("section__title-3", "section__title_is-active");
		for (var i = 1; i < 15; i++) {
			scrollEvent("grid__item" + "-" + i, "scroll-animation-active");
		}
		for (var a = 1; a < 7; a++) {
			scrollEvent("about-me__block" + "-" + a, "scroll-animation-active");
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
			console.log(className);
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
}