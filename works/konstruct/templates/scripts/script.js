window.onload = function() {
	let canClose = true;
	let menuOpen = false;
	$(".header__button").click(function() {
		if (!menuOpen) {
			openMenu();
			canClose = false;
			setTimeout(() => {canClose = true;}, 50);
		}
	});
	$("section, header").click(function() {
		if (menuOpen) {
			if (canClose) {
				closeMenu();
			}
		}
	});
	function openMenu() {
		$(".header__nav-mobile").addClass("header__nav-mobile_active");
		menuOpen = true;
	}
	function closeMenu() {
		$(".header__nav-mobile").removeClass("header__nav-mobile_active");
		menuOpen = false;
	}
}