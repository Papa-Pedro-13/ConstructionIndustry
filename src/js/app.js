
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();



/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();




new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

document.querySelector(".header__burger").addEventListener("click", () => {
	document.querySelector(".header-mobile").classList.add("header-mobile--open")
})
document.querySelector(".header__close").addEventListener("click", () => {
	document.querySelector(".header-mobile").classList.remove("header-mobile--open")
})

var inputs = document.querySelectorAll('input[type="file"]');
Array.prototype.forEach.call(inputs, function (input) {
	var label = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener('change', function (e) {
		var fileName = '';
		if ($(this).val() != '' && $(this)[0].files.length > 1) label.querySelector('span').innerHTML = ('Выбрано файлов: ' + $(this)[0].files.length);
		else
			fileName = e.target.value.split('\\').pop();

		if (fileName)
			label.querySelector('span').innerHTML = fileName;
	});
});


const swiper = new Swiper('#more-house-slider', {
	// modules: [Navigation, Pagination],
	speed: 500,
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.works-slider__nav .swiper-button-next',
		prevEl: '.works-slider__nav .swiper-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1440: {
			slidesPerView: 3,
			spaceBetween: 30,
		},

	},
});

var reviewsSlider = new Swiper(".reviews__slider", {
	spaceBetween: 20,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


if (document.documentElement.clientWidth > 1273) {

	let accordion = document.querySelectorAll('.complect__table>.accordion__item')
	accordion.forEach(item => {
		item.classList.add('open')
	})
	document.addEventListener('click', () => {
		accordion.forEach(item => {
			item.classList.add('open')
		})
	})
}


let $lgSwiper = document.getElementById("lg-swipper");
const mainSlider = new Swiper('#main-slider', {

	speed: 500,
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: ' .main-slider__nav .swiper-button-next',
		prevEl: ' .main-slider__nav .swiper-button-prev',
	},

	breakpoints: {
		1024: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1440: {
			slidesPerView: 4,
		}
	},
	on: {
		init: function () {
			const lg = lightGallery($lgSwiper, {
				speed: 300
			});
			$lgSwiper.addEventListener("lgBeforeClose", () => {
				swiper.slideTo(lg.index, 0);
			});
		}
	}

});


