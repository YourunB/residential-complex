document.addEventListener('DOMContentLoaded', function(){
	var lazyLoadInstance = new LazyLoad({
	});

	const sections = document.querySelectorAll('.home');

	$(".related__apartments_list").css("width", $(".related__apartments_list .apartment").length * 404 + "px")
	//	open section info
	
	$(".key").on("click", (e) => {
		showSectionInfo(e);
	})

	$(".home").on("click", (e) => {
		showSectionInfo(e);
	});

	function showSectionInfo(e) {
		e.preventDefault();
		const section = e.target.dataset.home;
		sections[section - 1].classList.add("home_checked");
		$(".overlay").addClass("open");
		$(".section__info").addClass("show");
		$(".section__info_title").text(`Секция ${section}`);
		document.querySelector('#section-link').href = `section-${section}.html`;
		document.querySelector('#floors-link').href = `select-${section}.html`;
	}

	$(".list__image").on("click", (e) => {
		e.preventDefault();
		$(".overlay").addClass("open");
		$(".section__info").addClass("show");
	});
	
	//	open form
	
	$(".btn__order").on("click", (e) => {
		e.preventDefault()
		$(".overlay, .modal").addClass("open")
	})
	
	$(".modal .modal-close img, .overlay").on("click", () => {
		sections.forEach(section => section.classList.remove("home_checked"));
		$(".overlay, .modal").removeClass("open")
		$(".section__info, .overlay").removeClass("show")
	})
	
	//	change filter
	
	$(".search__list_toggle a").on("click", function() {
		if ( !($(this).hasClass("active")) ) {
			$(".search__list_toggle a").removeClass("active")
			$(this).addClass("active")
			$(".search__list_content").toggleClass("filter-list")
		}
	})

	//	show / hide ilter mobile

	$(".open__filter").on("click", (e) => {
		e.preventDefault()
		$(".filter__mobile").addClass("show")
	})

	$(".filter__mobile_hide").on("click", (e) => {
		e.preventDefault()
		$(".filter__mobile").removeClass("show")
	})
	
	//	select caurusel

	let owlCarousel = document.querySelector(".owl-carousel")

	if ( owlCarousel ) {
		$(".owl-carousel").owlCarousel({
			items: 1
		});
	}

	
	
	//	scroll to video
	/*
	$(".main__content_order-scroll").click(function () {
		let elementClick = $(this).attr("href");
		let destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
    });
	
	//	menu
	const burgerBtn = document.querySelector(".burger-btn")
	const siteMenu = document.querySelector(".menu")
	const menuСlose = document.querySelector(".menu-close")
	
	burgerBtn.addEventListener("click", () => {
		document.body.classList.add("no-scroll")
		siteMenu.classList.add("open")
	})
	
	menuСlose.addEventListener("click", () => {
		document.body.classList.remove("no-scroll")
		siteMenu.classList.remove("open")
	})
	
	const personalCheckboxMenu = document.querySelector(".form-order__elem__personal-menu")
	personalCheckboxMenu.addEventListener("click", function() {
		this.classList.toggle("checked")
	})
	
	//	opent texts on mobile
	const hideText = document.querySelector(".hide-text")
	const showMore = document.querySelector(".show-more")
	if ( showMore ) {
		showMore.addEventListener("click", function() {
			hideText.classList.add("show")
			showMore.classList.add("hide")
		})
	}
	
	
	//	animation
	if ( window.innerWidth >= 1200 ) {

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smoot: 1.5,
			effects: true
		})
		let itemsMain = gsap.utils.toArray('h1')

		itemsMain.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-1150',
					end: '-1000',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsBottom = gsap.utils.toArray('.economy .economy__items .economy__items_single, .efficiency .efficiency__list .efficiency__list_item, .efficiency .efficiency__description, .efficiency .efficiency__btn')

		itemsBottom.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-750',
					end: '-300',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsLeft = gsap.utils.toArray('h1, h2, .avantages .avantages__list .avantages__list_item.avantages-1, .avantages .avantages__list .avantages__list_item.avantages-2, .demonstration .demonstration__image, .demonstration .demonstration__bg, .principle .principle__image img, .gas-advantages .advantages__content, .work .work__elem, .realization .realization__elem, .msp-principle .msp-principle__content .msp-principle__content_col, .mgp-advantages .mgp-advantages__elem, .mgp-variants .mgp-variants__elem, .place.place-sgp .place-sgp__video .place-sgp__elem, .mgp-demonstration .mgp-demonstration__video .mgp-demonstration__elem, .sgp-advantages .sgp-advantages__elem, .mgpp-principle .mgpp-principle__content')

		itemsLeft.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-600',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsRight = gsap.utils.toArray('.avantages .avantages__list .avantages__list_item.avantages-3, .avantages .avantages__list .avantages__list_item.avantages-4, .efficiency .efficiency__img, .demonstration .demonstration-slider, .principle .principle__content p, .gas-advantages .advantages__images, .msp-principle .msp-principle__images .msp-principle__images_elem, mgpp-principle__image')

		itemsRight.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-600',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsBottomOrder = gsap.utils.toArray('.service p, .service .order, .msp-principle .msp-principle__bg .msp-principle__bg-front, .sgp-principle .sgp-principle-slider .place-sgp__video .sgp-principle__elem img, .sgp-principle .sgp-principle__large, .sgp-principle .sgp-principle__small, .sgp-principle .principle-image-large, .sgp-principle .principle-image-small, .work-box, mgpp-box, .mgpp-principle .gallery__elem img')

		itemsBottomOrder.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-950',
					end: '-800',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsBottomShow = gsap.utils.toArray('.place .place__elem')

		itemsBottomShow.forEach(item => {
			gsap.fromTo(item, { opacity: 0 }, {
				opacity: 1,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-850',
					scrub: true,
					once: true
				},
				onComplete: function(){
					$('.place .place__elem').addClass('show')
					$('.place .place__elem .place__elem_image img').addClass('scale')
				}
			})
		})
		
	}
	
	//	video
	Fancybox.bind("[data-fancybox]", {});
	
	window.addEventListener('resize',(e) => {
		const width = document.body.clientWidth
		console.log(width)
		// https://swiperjs.com/swiper-api#method-swiper-destroy
	});
	/*
	//	single__gallery
	$('.single__gallery').owlCarousel({
		loop: true,
		margin: 0,
		center: true,
		nav: true,
		items: 3
	})
	
	console.log($(".owl-carousel.owl-drag .owl-item.active").length)
	$(".owl-carousel.owl-drag .owl-item.active:nth-child(1)").addClass("cl-1")
	*/
	/*
	const singleGalleryExists = document.querySelector(".single__gallery")
		if ( singleGalleryExists ) {
			const singleGallery = new Swiper('.single__gallery', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,
				spaceBetween: 0,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
			$(".gallery-box .swiper-button-next").click()
		}
		
	const mgppGalleryExists = document.querySelector(".mgpp__gallery")
		if ( mgppGalleryExists ) {
			const mgppGallery = new Swiper('.mgpp__gallery', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,
				spaceBetween: 0,
				navigation: {
					nextEl: '.swiper-button-next__mgpp',
					prevEl: '.swiper-button-prev__mgpp',
				},
			});
			$(".mgpp-box .swiper-button-next__mgpp").click()
		}
		
	const workGalleryExists = document.querySelector(".work__gallery")
		if ( workGalleryExists ) {
			const workGallery = new Swiper('.work__gallery', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,
				spaceBetween: 0,
				navigation: {
					nextEl: '.swiper-button-next__work',
					prevEl: '.swiper-button-prev__work',
				},
			});
			$(".work-box .swiper-button-next__work").click()
			$(".work-box .swiper-button-next__work").click()
		}
		
	//	economy slider
	if ( window.innerWidth <= 768 ) {
		
		const economySliderExists = document.querySelector(".economy-slider")
		if ( economySliderExists ) {
			const economySlider = new Swiper('.economy-slider', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,	
				spaceBetween: 13,
				navigation: {
					nextEl: '.slider-pagination__btn--next',
					prevEl: '.slider-pagination__btn--prev',
				},
			});
		}
	}
	
	//	demonstration slider
	if ( window.innerWidth <= 768 ) {
		
		const demonstrationSliderExists = document.querySelector(".demonstration-slider")
		if ( demonstrationSliderExists ) {
			const demonstrationSlider = new Swiper('.demonstration-slider', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,	
				spaceBetween: 13,
				navigation: {
					nextEl: '.slider-pagination__btn--next_video',
					prevEl: '.slider-pagination__btn--prev_video',
				},
			});
		}
	}
	
	//	demonstration slider
	if ( window.innerWidth <= 576 ) {
		
		const mgpDemonstrationSliderExists = document.querySelector(".mgp-demonstration-slider")
		if ( mgpDemonstrationSliderExists ) {
			const mgpDemonstrationSlider = new Swiper('.mgp-demonstration-slider', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,	
				spaceBetween: 9,
				navigation: {
					nextEl: '.slider-pagination__btn--next_demonstration',
					prevEl: '.slider-pagination__btn--prev_demonstration',
				},
			});
		}
	}
	
	//	place slider
	if ( window.innerWidth <= 576 ) {
		
		const placeSgpSliderExists = document.querySelector(".place-sgp-slider")
		if ( placeSgpSliderExists ) {
			const placeSgpSlider = new Swiper('.place-sgp-slider', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,	
				spaceBetween: 9,
				navigation: {
					nextEl: '.slider-pagination__btn--next_place-sgp',
					prevEl: '.slider-pagination__btn--prev_place-sgp',
				},
			});
		}
	}
	
	//	principle slider
	if ( window.innerWidth <= 576 ) {
		
		const sgpPrincipleSliderExists = document.querySelector(".sgp-principle-slider")
		if ( sgpPrincipleSliderExists ) {
			const sgpPrincipleSlider = new Swiper('.sgp-principle-slider', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,	
				spaceBetween: 9,
				navigation: {
					nextEl: '.slider-pagination__btn--next_principle-sgp',
					prevEl: '.slider-pagination__btn--prev_principle-sgp',
				},
			});
		}
	}
	//	demonstration mgpp slider
	/*
	if ( window.innerWidth <= 576 ) {
		
		const mgppDemonstrationSliderExists = document.querySelector(".mgpp-demonstration-slider")
		if ( mgppDemonstrationSliderExists ) {
			const mgppDemonstrationSlider = new Swiper('.mgpp-demonstration-slider', {
				// Optional parameters
				slidesPerView: 1,
				loop: true,	
				spaceBetween: 9,
				navigation: {
					nextEl: '.slider-pagination__btn--next_video_demonstration-mgpp',
					prevEl: '.slider-pagination__btn--prev_video_demonstration-mgpp',
				},
			});
		}
	}
	*/
	
	//	order form
	/*
	$("form input[name='phone']").mask("+7 (999) 99-99")
	
	const personalCheckboxMain = document.querySelector(".form-order__elem__personal-main")
	if ( personalCheckboxMain ) {
		personalCheckboxMain.addEventListener("click", function() {
			this.classList.toggle("checked")
		})
	}
	
	$(".calculator .dropdawn__box .dropdawn__box_current").on("click", function(){
		$(this).parent().toggleClass("open")
	})
	
	$(".calculator .dropdawn__box .dropdawn__box_list .dropdawn__box_list-item").on("click", function(){
		$(".calculator .dropdawn__box .dropdawn__box_current").text($(this).text())
		$(this).closest(".dropdawn__box").removeClass("open")
	})
	
	$(".calculator .calculator__box_elem .checkbox-elem").on("click", function(){
		$(this).toggleClass("checked")
	})
	*/
})