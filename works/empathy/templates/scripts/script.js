window.onload = function () {
	$(".scroll-bar__right-button").click(function () {
		scroll_bar_move_right();
	});
	$(".scroll-bar__left-button").click(function () {
		scroll_bar_move_left();
	});

	let canClose = true;
	$(".header__button").click(function() {
			openMenu();
			canClose = false;
			setTimeout(() => {canClose = true;}, 50);
	});
	$("section, header").click(function() {
			if (canClose) {
				closeMenu();
			}
	});
	function openMenu() {
		$(".header__nav-mobile").addClass("header__nav-mobile_active");
	}
	function closeMenu() {
		$(".header__nav-mobile").removeClass("header__nav-mobile_active");
	}
	
}

function scroll_bar_move_right() {
	$(".scroll-bar__wrapper-overflow").css("left", scroll_distance("right"));
}
function scroll_bar_move_left() {
	$(".scroll-bar__wrapper-overflow").css("left", scroll_distance("left"));
}
function scroll_distance(direction) {
	var left = $(".scroll-bar__wrapper-overflow").css("left");
	left = left.split("");
	left = left.reverse();
	left = left.slice(2);
	left = left.reverse();
	left = left.join("");
	if (direction == "left") {
		if (left >= -480) {
			left = 40;
			$(".scroll-bar__left-button").css("opacity", 0.6);
		}
		else {
			left = Number(left) + 480;
			$(".scroll-bar__left-button").css("opacity", 1);
		}
		$(".scroll-bar__right-button").css("opacity", 1);
	}
	if (direction == "right") {
		if (left <= -1800 + document.documentElement.clientWidth) {
			left = -2296 + document.documentElement.clientWidth;
			$(".scroll-bar__right-button").css("opacity", 0.6);
		}
		else {
			left = Number(left) - 480;
			$(".scroll-bar__right-button").css("opacity", 1);
		}
		$(".scroll-bar__left-button").css("opacity", 1);
	}
	return left;
}
