window.onload = () => {
	let category = "all";
	let oldCategory = "all";
	$(window).scroll(() => {
		if ($(window).scrollTop() > 200) {
			$(".header").addClass("header-active");
		}
		else {
			$(".header").removeClass("header-active");
		}
		if (($(window).scrollTop() > $("#about").offset().top - 71) && (($(window).scrollTop() < $("#services").offset().top - 71))) {
			$("#nav-about").addClass("nav-link-active");
		} else {
			$("#nav-about").removeClass("nav-link-active");
		}
		if (($(window).scrollTop() > $("#services").offset().top - 71) && (($(window).scrollTop() < $("#projects").offset().top - 71))) {
			$("#nav-services").addClass("nav-link-active");
		} else {
			$("#nav-services").removeClass("nav-link-active");
		}
		if (($(window).scrollTop() > $("#projects").offset().top - 71) && (($(window).scrollTop() < $("#team").offset().top - 71))) {
			$("#nav-projects").addClass("nav-link-active");
		} else {
			$("#nav-projects").removeClass("nav-link-active");
		}
		if (($(window).scrollTop() > $("#team").offset().top - 71) && (($(window).scrollTop() < $("#contact").offset().top - 71))) {
			$("#nav-team").addClass("nav-link-active");
		} else {
			$("#nav-team").removeClass("nav-link-active");
		}
		if ($(window).scrollTop() > $("#contact").offset().top - 71) {
			$("#nav-contact").addClass("nav-link-active");
		} else {
			$("#nav-contact").removeClass("nav-link-active");
		}
	})

	$("#all").click(() => {
		$(".categories-item").removeClass("active-category");
		$("#all").addClass("active-category");
		changeCategory("all", oldCategory);
		oldCategory = "all";
		category = "all";
	});
	$("#residential").click(() => {
		$(".categories-item").removeClass("active-category");
		$("#residential").addClass("active-category");
		changeCategory("category-1", oldCategory);
		oldCategory = "category-1";
		category = "category-1";
	});
	$("#office").click(() => {
		$(".categories-item").removeClass("active-category");
		$("#office").addClass("active-category");
		changeCategory("category-2", oldCategory);
		oldCategory = "category-2";
		category = "category-2";
	});
	$("#commercial").click(() => {
		$(".categories-item").removeClass("active-category");
		$("#commercial").addClass("active-category");
		changeCategory("category-3", oldCategory);
		oldCategory = "category-3";
		category = "category-3";
	});
	function changeCategory(choosedCategory, oldCategory) {
		if (choosedCategory == "all") {
			$(".projects-wrapper > div").addClass("show-category");
			$(".category-transition").addClass("category-transition-none");
			$("." + oldCategory).removeClass("category-transition-none");
			setTimeout(() => {$(".category-transition").removeClass("category-transition-none")}, 500);
			if ($(window).width() > 750) {
				$(".category-1-1").css("transform", "translate(0px, 0px)");
				$(".category-1-2").css("transform", "translate(" + $(".category-1").outerWidth() + "px, 0px)");
				$(".category-1-3").css("transform", "translate(" + $(".category-1").outerWidth() * 2 + "px, 0px)");
				$(".category-1-4").css("transform", "translate(0px, " + $(".category-1").outerHeight() + "px)");
				$(".category-1-5").css("transform", "translate(" + $(".category-1").outerWidth() + "px, " + $(".category-1").outerHeight() + "px)");
				$(".category-2-1").css("transform", "translate(" + $(".category-2").outerWidth() * 2 + "px, " + $(".category-1").outerHeight() + "px)");
				$(".category-2-2").css("transform", "translate(0px, " + $(".category-2").outerHeight() * 2 + "px)");
				$(".category-2-3").css("transform", "translate(" + $(".category-2").outerWidth() + "px, " + $(".category-1").outerHeight() * 2 + "px)");
				$(".category-2-4").css("transform", "translate(" + $(".category-2").outerWidth() * 2 + "px, " + $(".category-1").outerHeight() * 2 + "px)");
				$(".category-3-1").css("transform", "translate(0px, " + $(".category-3").outerHeight() * 3 + "px)");
				$(".category-3-2").css("transform", "translate(" + $(".category-3").outerWidth() + "px, " + $(".category-1").outerHeight() * 3 + "px)");
				$(".category-3-3").css("transform", "translate(" + $(".category-3").outerWidth() * 2 + "px, " + $(".category-1").outerHeight() * 3 + "px)");
				$(".projects-wrapper").css("height", $(".category-1").outerHeight() * 4);
			} else {
				$(".category-1-1").css("transform", "translate(0px, 0px)");
				$(".category-1-2").css("transform", "translate(0px, " + $(".category-1").outerHeight() + "px)");
				$(".category-1-3").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 2 + "px)");
				$(".category-1-4").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 3 + "px)");
				$(".category-1-5").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 4 + "px)");
				$(".category-2-1").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 5 + "px)");
				$(".category-2-2").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 6 + "px)");
				$(".category-2-3").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 7 + "px)");
				$(".category-2-4").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 8 + "px)");
				$(".category-3-1").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 9 + "px)");
				$(".category-3-2").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 10 + "px)");
				$(".category-3-3").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 11 + "px)");
				$(".projects-wrapper").css("height", $(".category-1").outerHeight() * 12);
			}
		} else {
			$(".category-1, .category-2, .category-3").removeClass("show-category");
			$("." + choosedCategory).addClass("show-category");
			if ($(window).width() > 750) {
			$("." + choosedCategory + "-1").css("transform", "translate(0px, 0px)");
					$("." + choosedCategory + "-2").css("transform", "translate(" + $(".category-1").outerWidth() + "px, 0px)");
					$("." + choosedCategory + "-3").css("transform", "translate(" + $(".category-1").outerWidth() * 2 + "px, 0px)");
					$("." + choosedCategory + "-4").css("transform", "translate(0px, " + $(".category-1").outerHeight() + "px)");
					$("." + choosedCategory + "-5").css("transform", "translate(" + $(".category-1").outerWidth() + "px, " + $(".category-1").outerHeight() + "px)");
				setTimeout(() => {
					for (var i = 0; i < 6; i++) {
						$("." + "category-" + i + "-1").css("transform", "translate(0px, 0px)");
						$("." + "category-" + i + "-2").css("transform", "translate(" + $(".category-1").outerWidth() + "px, 0px)");
						$("." + "category-" + i + "-3").css("transform", "translate(" + $(".category-1").outerWidth() * 2 + "px, 0px)");
						$("." + "category-" + i + "-4").css("transform", "translate(0px, " + $(".category-1").outerHeight() + "px)");
						$("." + "category-" + i + "-5").css("transform", "translate(" + $(".category-1").outerWidth() + "px, " + $(".category-1").outerHeight() + "px)");
					}
				}, 500);
				($("." + choosedCategory).hasClass(choosedCategory + "-4")) ? $(".projects-wrapper").css("height", $("." + choosedCategory).outerHeight() * 2) : $(".projects-wrapper").css("height", $("." + choosedCategory).outerHeight());
			} else {
				setTimeout(() => {
					for (var i = 0; i < 6; i++) {
						$("." + "category-" + i + "-1").css("transform", "translate(0px, 0px)");
						$("." + "category-" + i + "-2").css("transform", "translate(0px, " + $(".category-1").outerHeight() + "px)");
						$("." + "category-" + i + "-3").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 2 + "px)");
						$("." + "category-" + i + "-4").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 3 + "px)");
						$("." + "category-" + i + "-5").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 4 + "px)");
					}
				}, 500);	
				for (var i = 0; i < 6; i++) {
					$("." + choosedCategory + "-1").css("transform", "translate(0px, 0px)");
					$("." + choosedCategory + "-2").css("transform", "translate(0px, " + $(".category-1").outerHeight() + "px)");
					$("." + choosedCategory + "-3").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 2 + "px)");
					$("." + choosedCategory + "-4").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 3 + "px)");
					$("." + choosedCategory + "-5").css("transform", "translate(0px, " + $(".category-1").outerHeight() * 4 + "px)");
				}
				$(".projects-wrapper").css("height", $("." + choosedCategory).outerHeight() * $("." + choosedCategory).length);
			}
		}
	}
	changeCategory(category);
	$(window).resize(() => {changeCategory(category)});
}