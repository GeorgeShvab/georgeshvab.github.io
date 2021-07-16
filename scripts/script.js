var menu_activated = false;
window.onload = function onload() {
	$("#header__about-me").click(function(){
		scroll_to_section("about-me");
	})
	$("#header__skills").click(function(){
		scroll_to_section("skills");
	})
	$("#header__portfolio").click(function(){
		scroll_to_section("portfolio");
	})
	$(window).scroll(function() {
  		scroll_event("skills__wrapper", "_active");
  		scroll_event("skills__title", "_active");
  		scroll_event("about-me__content-paragraph-3", "_active");
  		scroll_event("about-me__content-paragraph-2", "_active");
  		scroll_event("about-me__content-paragraph-1", "_active");
  		scroll_event("about-me__content-subtitle", "_active");
  		scroll_event("about-me__title", "_active");
  		scroll_event("about-me__illustration", "_active-about-me-image");
  		scroll_event("skills__paragraph-1", "_active");
  		scroll_event("skills__paragraph-2", "_active");
  		scroll_event("skills__paragraph-3", "_active");
  		scroll_event("portfolio__title", "_active");
  		scroll_event("portfolio__block-1", "_active");
  		scroll_event("portfolio__block-2", "_active");
	});
	$(".header__burger-container").click(function(){
		if (menu_activated == false) {
			open_menu();
		}
		else {
			close_menu();
		}
	})
}

function scroll_event(old_class, new_class) {
  		if ($("html").scrollTop() > $('.' + old_class).offset().top - $(window).height() - 100) {
			$('.' + old_class).addClass(new_class);
  		}
}
function scroll_to_section(section_name) {
	$('html, body').animate({
        scrollTop: $('.' + section_name).offset().top
    }, 2000);
}
function close_menu() {
	$(".header__burger").removeClass("header__burger_activated");
	$(".header__list").removeClass("header__list_activated");
	$("html").removeClass("no-scroll");
	menu_activated = false;
}
function open_menu() {
	$(".header__burger").addClass("header__burger_activated");
	$(".header__list").addClass("header__list_activated");
	$("html").addClass("no-scroll");
	menu_activated = true;
}
