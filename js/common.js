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
		$('body').css('overflow', 'auto');
	});
	$('.site-list-item').click(function() {
		$('body').removeClass('open');
//		$('body').css('overflow', 'auto');
	});
//	$('.open button.menu-toggle:after').click(function() {
//		$('body').css('overflow', 'auto');
//	});
//	$('button.menu-toggle:after').click(function() {
//		$('body').css('overflow', 'auto');
//	});

/********************   M E N U  зафиксированное  *********************/
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

	// Плавное перемещение по меню
	$(window).resize(function() {
		if ( $(window).width() > 768 ) {

			$("#menu").on("click","a", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
				top = $(id).offset().top;
				$('body,html').animate({scrollTop: top - 50}, 1500);
			});
		}
	});
	// animaciya



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

	// Всплывающая форма
	$(".order-call").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

		//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
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



	$(window).load(function() {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

		// $(".top-header").animated("fadeInDown", "fadeOut");
		// $(".tabs-header .wrapper").animated("flipInY", "fadeOut");
		// // $(".request-form").animated("fadeInRight", "fadeOut");
		// $(".request-form").animated("zoomInRight", "fadeOut");
		// $(".questions-wrap").animated("fadeInUp", "fadeOut");
		// $("section h2, .top-map").animated("fadeInUp", "fadeOut");
	});