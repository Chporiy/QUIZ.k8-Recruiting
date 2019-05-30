$(document).ready(function () {

	new WOW().init();

	var step1 = $(".step1"),
		step2 = $(".step2"),
		step3 = $(".step3"),
		step4 = $(".step4"),
		next = $(".step-next"),
		result = $(".result-center"),
		modal = $(".modal-overlay"),
		modalClose = $(".modal-close"),
		modalThanks = $(".modal_thanks-overlay"),
		modalThanksClose = $(".modal_thanks-close");

	$(".step1-answer").on("click", function () {
		$(".step-answer_descr").toggleClass("step-answer_descrspan-active");
	});
	
	// Начать квиз
	$("#start").on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
		$(".header-center").animate({
			opacity: 0,
			right: "100%"
		}, 1000, function () {
			$(".header").hide();
			$(".form").show();
			step1.show();
		});

	});

  // Проверка на выбор ответа в 1м шаге

	next.prop('disabled', true);

	var bool = false;

	function check() {
		$(".step-answer_descr input").each(function (index, elem) {
			if ($(".step-answer_descr input").is(':checked')) {
				bool = true;
			} else {
				bool = false;
			}
		});
		return bool;
	}

	$('.step1-answers_descr input').change(
		function () {
			check();
			if (bool == true) {
				next.prop('disabled', false);
				next.removeClass('step-next_noactive');
			} else {
				next.prop('disabled', true);
				next.addClass('step-next_noactive');
			}
			// if ($(this).is(':checked')) {
			// 	next.prop('disabled', false);
			// 	next.toggleClass('step-next_noactive');
			// }
		});


	// Переход между шагами

	next.on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
		step1.animate({
			opacity: 0,
			right: "100%"
		}, 1000, function () {
			step1.hide();
			step2.show();

			return false;
		});
	});

	$(".step2-answer").on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
		step2.animate({
			opacity: 0,
			right: "100%"
		}, 1000, function () {
			step2.hide();
			step3.show();
			return false;
		});
	});

	$(".step3-answer").on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
		step3.animate({
			opacity: 0,
			right: "100%"
		}, 1000, function () {
			step3.hide();
			step4.show();
			return false;
		});
	});

	$(".step4-answer").on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
		step4.animate({
			opacity: 0,
			right: "100%"
		}, 1000, function () {
			// $(".form").hide();
			step4.hide();
			result.show();
			return false;
		});
	});

	// Форма отправки

	function setSelectionRange(input, selectionStart, selectionEnd) {
		if (input.setSelectionRange) {
			input.focus();
			input.setSelectionRange(selectionStart, selectionEnd);
		} else if (input.createTextRange) {
			var range = input.createTextRange();
			range.collapse(true);
			range.moveEnd('character', selectionEnd);
			range.moveStart('character', selectionStart);
			range.select();
		}
	}

	function setCaretToPos(input, pos) {
		setSelectionRange(input, pos, pos);
	}

	$("#tel").click(function () {
		setCaretToPos($("#tel")[0], 3);
	});

	$(".result-form_btn").prop("disabled", true);

	$(function () {
		$("#tel").mask("8 (999) 999-99-99", {
			placeholder: "8 (XXX) XXX-XX-XX",
			completed: function () {
				$('.result-form_btn').prop('disabled', false);
				$(".result-form_btn").removeClass("result-form_btn-noactive");
			}
		});
	});

	$("#consult_tel").click(function () {
		setCaretToPos($("#consult_tel")[0], 3);
	});

	$(".modal-form_btn").prop("disabled", true);

	$(function () {
		$("#consult_tel").mask("8 (999) 999-99-99", {
			placeholder: "8 (XXX) XXX-XX-XX",
			completed: function () {
				$('.modal-form_btn').prop('disabled', false);
				$(".modal-form_btn").removeClass("modal-form_btn-noactive");
			}
		});
	});

	// Модальное окно
	$(".header-top_btn").on("click", function () {
		modal.show();
		$(".modal_info-overlay").hide();
	});
	$(".header-offer_consult").on("click", function () {
		modal.show();
		$(".modal_info-overlay").hide();
	});
	modalClose.on("click", function () {
		modal.hide();
	});
	modalThanksClose.on("click", function () {
		modalThanks.hide();
	});
	$(".header-hide img").on("click", function() {
		$(".modal_info-overlay").show();
	});
	$(".modal-info_close").on("click", function() {
		$(".modal_info-overlay").hide();
	});


	// Отправка формы

	

});