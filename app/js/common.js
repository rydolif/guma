$(function() {


// function scrollPane() {
//   $('.wrapper').jScrollPane();
// };

// scrollPane();

// $(window).resize(function(){
//   scrollPane();
// });

var swiper3 = new Swiper('.reviews-slider', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
      breakpoints: {
        992: {
          slidesPerView: 1,
        }
      }
    });

var swiper2 = new Swiper('.test-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        },
      }
    });


$('.modal').popup({ transition: 'all 0.3s' });

$(".modal .callback_close").click(function(){
  var form = $(this).parent().find("form"); 
  $(form).trigger('reset');
})

$('.partner').popup({ transition: 'all 0.3s' });


$(".partner .callback-2_close").click(function(){
  var form = $(this).parent().find("form"); 
  $(form).trigger('reset');
})

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+38 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{2}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
        adress: "Введите Ваш адрес",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          adress: jQuery('.form-' + index).find("input[name=adress]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

$(window).scroll(function() {

  var parallax = $(this).scrollTop();

  $('.parallax').css({
    'transform' : 'translate(0%, ' + parallax/20 + '%)'
  });
  
});

$(window).scroll(function() {

  var parallax = $(this).scrollTop();

  $('.parallax-thumb').css({
    'transform' : 'translate(0%, ' + parallax/20 + '%)'
  });
  
});

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 67}, 'slow', 'swing');
  });

});
