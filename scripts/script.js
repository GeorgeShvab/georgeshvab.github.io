window.onload = function onload() {
	$("#header__about-me").click(function(){
		scroll_to_section("about-me");
	})
	$("#header__skills").click(function(){
		scroll_to_section("skills");
	})
	$("#header__portfolio, .intro__button").click(function(){
		scroll_to_section("portfolio");
	})
	$("#header__contacts").click(function(){
		scroll_to_section("contacts");
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
