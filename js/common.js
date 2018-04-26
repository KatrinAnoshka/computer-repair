$(document).ready(function() {

/*******************  Табы переключатели   *******************/
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

/*******************  M E N U адаптивное  *******************/
	
	$('button.menu-toggle').on('click', function(){
		$('body').toggleClass('open');
		$('body').toggleClass('no-scroll');
		$('button.menu-toggle').addClass('cross');
	});

	$('.site-list-item a, .cross').on('click', function(){
		$('body').removeClass('open');
		$('body').removeClass('no-scroll');
	});
	
/********************   M E N U  фиксированное  *********************/
	if ($(window).width() > 992)   {
		$(window).scroll(function () {
			var scrolled = $(window).scrollTop();
			if (scrolled >= 160) {
				$('nav').addClass('scroll');
			}
			else {
				if (scrolled < 210) {
					$('nav').removeClass('scroll');
				}
			}
		});
	}

/************ Вторая секция - отзывы ************/
	$(".owl-carousel").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 800,
		autoplaySpeed : 1000,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	/************ Плавный скролл меню ************/

	if( window.innerWidth >= 992 ){
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				headerHeight = $('.header').height() + 110;  
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - headerHeight
				}, 800, function() {
				target.focus();
			});
			return false;
			}
			}
		});
	}

	/***************** Анимация *****************/

	$('.comp, .quest-phone-wrap')
	.waypoint( function(dir) {
		if ( dir === 'down' )
			$(this)
		.removeClass('fadeOut')
		.addClass('bounceInDown');
		else
			$(this)
		.removeClass('bounceInDown')
		.addClass('fadeOut');
	}, {
		offset: '80%'
	})
	.waypoint( function(dir) {
		if ( dir === 'down' )
			$(this)
		.removeClass('bounceInDown')
		.addClass('fadeOut');
		else
			$(this)
		.removeClass('fadeOut')
		.addClass('bounceInDown');
	}, {
		offset: -50
	})

	$('.laptop, .form-title')
	.waypoint( function(dir) {
		if ( dir === 'down' )
			$(this)
		.removeClass('fadeOut')
		.addClass('bounceInLeft');
		else
			$(this)
		.removeClass('bounceInLeft')
		.addClass('fadeOut');
	}, {
		offset: '80%'
	})
	.waypoint( function(dir) {
		if ( dir === 'down' )
			$(this)
		.removeClass('bounceInLeft')
		.addClass('fadeOut');
		else
			$(this)
		.removeClass('fadeOut')
		.addClass('bounceInLeft');
	}, {
		offset: -50
	})

	$('.tabs-header .wrapper, .box')
	.waypoint( function(dir) {
		if ( dir === 'down' )
			$(this)
		.removeClass('fadeOut')
		.addClass('flipInY');
		else
			$(this)
		.removeClass('flipInY')
		.addClass('fadeOut');
	}, {
		offset: '80%'
	})
	.waypoint( function(dir) {
		if ( dir === 'down' )
			$(this)
		.removeClass('flipInY')
		.addClass('fadeOut');
		else
			$(this)
		.removeClass('fadeOut')
		.addClass('flipInY');
	}, {
		offset: -50
	})

	/************* Всплывающая форма *************/

	$(".order-call, .call").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

	/********* Цели для Яндекс.Метрики и Google Analytics *********/
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

    /************** Аякс отправка форм **************/
	
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

	/******* Иконка-спиннер Иконка-спиннер *******/

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});