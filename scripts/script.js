window.onload = function onload() {
	$("#header__about-me").click(function(){
		scroll_to_about_me();
	})
	$("#header__skills").click(function(){
		scroll_to_skills();
	})
	$("#header__portfolio").click(function(){
		scroll_to_portfolio();
	})
	$("#header__contacts").click(function(){
		scroll_to_contacts();
	})
	$(".btn").click(function(){
		alert($(".skills").offset().top.toFixed());
		alert($("html").scrollTop().toFixed());
	})
	$(window).scroll(function() {
  		scroll_animation("skills__wrapper", "_active");
  		scroll_animation("skills__title", "_active");
  		scroll_animation("about-me__content-paragraph-3", "_active");
  		scroll_animation("about-me__content-paragraph-2", "_active");
  		scroll_animation("about-me__content-paragraph-1", "_active");
  		scroll_animation("about-me__content-subtitle", "_active");
  		scroll_animation("about-me__illustration", "_active-image");
	});
}

function scroll_animation(old_class, new_class) {
  		if ($("html").scrollTop() > $('.' + old_class).offset().top - $(window).height() - 100) {
			$('.' + old_class).addClass(new_class);
  		}
}

function scroll_to_about_me() {
	$('html, body').animate({
        scrollTop: $(".about-me").offset().top
    }, 2000);
}
function scroll_to_skills() {
	$('html, body').animate({
        scrollTop: $(".skills").offset().top
    }, 2000);
}
function scroll_to_portfolio() {
	$('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 2000);
}
function scroll_to_contacts() {
	$('html, body').animate({
        scrollTop: $(".contacts").offset().top
    }, 2000);
}
