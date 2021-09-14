window.onload = function () {
	let open = false;
	$(window).scroll(() => {
		scrollEvent("section__title-1", "section__title_is-active");
		scrollEvent("section__title-2", "section__title_is-active");
		scrollEvent("section__title-3", "section__title_is-active");
		for (var i = 1; i < 15; i++) {
			scrollEvent("grid__item" + "-" + i, "grid__item_is-active");
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
		}
	}
}