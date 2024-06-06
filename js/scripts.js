$(() => {


  // Ширина окна для ресайза
  WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
  WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
  BODY = document.getElementsByTagName('body')[0]
  OVERLAY = document.querySelector('.overlay')


  // Моб. меню
  $('header .mob_menu_btn').click((e) => {
    e.preventDefault()

    $('header .mob_menu_btn').addClass('active')
    $('body').addClass('menu_open')
    $('header .menu').addClass('show')
    $('.overlay').fadeIn(300)
  })

  $('header .close_btn, header .menu .item a, .overlay').click((e) => {
    e.preventDefault()

    $('header .mob_menu_btn').removeClass('active')
    $('body').removeClass('menu_open')
    $('header .menu').removeClass('show')
    $('.overlay').fadeOut(300)
  })



  let header = $('header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      header.addClass('header_fixed');
    } else {
      header.removeClass('header_fixed');
    }
  });


  // Скрол к пунктам меню
  $(".scroll").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(id).offset().top - 80
    }, {
      duration: 400,
      easing: "swing"
    });
  });




  $('body').on('click', '.modal_link', function (e) {
    e.preventDefault()

    Fancybox.close(true)
    Fancybox.show([{
      src: $(this).data('content'),
      type: 'inline',
    }]);
  })


  Fancybox.bind('[data-fancybox="gallery1"]', {});
  Fancybox.bind('[data-fancybox="gallery2"]', {});
  Fancybox.bind('[data-fancybox="gallery3"]', {});
  Fancybox.bind('[data-fancybox="gallery4"]', {});
  Fancybox.bind('[data-fancybox="gallery5"]', {});

  // Fancybox
  Fancybox.defaults.autoFocus = false
  Fancybox.defaults.trapFocus = false
  Fancybox.defaults.dragToClose = false
  Fancybox.defaults.placeFocusBack = false
  Fancybox.defaults.l10n = {
    CLOSE: "Закрыть",
    NEXT: "Следующий",
    PREV: "Предыдущий",
    MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
  }

  Fancybox.defaults.template = {
    // closeButton: '<img src=images/close.png>',
    // 	spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
    // 	main: null
    closeButton: `<button data-fancybox-close class="f-button is-close-btn" title="Закрыть"><img src=images/close.svg></button>`
  }



  // Phone input mask
  const phoneInputs = document.querySelectorAll('input[type=tel]')

  if (phoneInputs) {
    phoneInputs.forEach(el => {
      IMask(el, {
        mask: '+{7} (000) 000-00-00',
        lazy: true
      })
    })
  }



  const sertificatSliders = [],
    sertificat = document.querySelectorAll('.sertificat .swiper')

  sertificat.forEach(function (el, i) {
    el.classList.add('sertificat_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        670: {
          spaceBetween: 15,
          slidesPerView: 2
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 2
        },
        970: {
          spaceBetween: 30,
          slidesPerView: 3
        },
        1300: {
          spaceBetween: 30,
          slidesPerView: 4
        }
      },
      pagination: {
        el: '.sertificat .swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    }

    sertificatSliders.push(new Swiper('.sertificat_s' + i, options))
  })


  const newSliders = [],
    new2 = document.querySelectorAll('.new .swiper')

  new2.forEach(function (el, i) {
    el.classList.add('new_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1
        },
        510: {
          spaceBetween: 12,
          slidesPerView: 2
        },
        768: {
          spaceBetween: 12,
          slidesPerView: 2
        },
        1024: {
          spaceBetween: 24,
          slidesPerView: 3
        },
        1300: {
          spaceBetween: 24,
          slidesPerView: 3
        }
      },
      pagination: {
        el: '.new .swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    }

    newSliders.push(new Swiper('.new_s' + i, options))
  })



  // Инициализация превью слайдера
  const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
    // ищем слайдер превью по селектору
    // задаем параметры
    direction: "vertical", // вертикальная прокрутка
    slidesPerView: 4, // показывать по 3 превью
    spaceBetween: 20, // расстояние между слайдами
    navigation: {
      // задаем кнопки навигации
      nextEl: ".slider__next", // кнопка Next
      prevEl: ".slider__prev" // кнопка Prev
    },
    freeMode: true, // при перетаскивании превью ведет себя как при скролле
    breakpoints: {
      // условия для разных размеров окна браузера
      0: {
        // при 0px и выше
        direction: "horizontal" // горизонтальная прокрутка
      },
      768: {
        // при 768px и выше
        direction: "vertical" // вертикальная прокрутка
      }
    }
  });
  // Инициализация слайдера изображений
  const sliderImages = new Swiper(".slider__images .swiper-container", {
    // ищем слайдер превью по селектору
    // задаем параметры
    direction: "vertical", // вертикальная прокрутка
    slidesPerView: 1, // показывать по 1 изображению
    spaceBetween: 20, // расстояние между слайдами
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    navigation: {
      // задаем кнопки навигации
      nextEl: ".slider__next", // кнопка Next
      prevEl: ".slider__prev" // кнопка Prev
    },
    grabCursor: true, // менять иконку курсора
    thumbs: {
      // указываем на превью слайдер
      swiper: sliderThumbs // указываем имя превью слайдера
    },
    breakpoints: {
      // условия для разных размеров окна браузера
      0: {
        // при 0px и выше
        direction: "horizontal" // горизонтальная прокрутка
      },
      768: {
        // при 768px и выше
        direction: "vertical" // вертикальная прокрутка
      }
    }
  });




  // Табы
  var locationHash = window.location.hash

  $('body').on('click', '.tabs button', function (e) {
    e.preventDefault()

    if (!$(this).hasClass('active')) {
      const $parent = $(this).closest('.tabs_container'),
        activeTab = $(this).data('content'),
        $activeTabContent = $(activeTab),
        level = $(this).data('level')

      $parent.find('.tabs:first button').removeClass('active')
      $parent.find('.tab_content.' + level).removeClass('active')

      $(this).addClass('active')
      $activeTabContent.addClass('active')
    }
  })

  if (locationHash && $('.tabs_container').length) {
    const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
      $activeTabContent = $(locationHash),
      $parent = $activeTab.closest('.tabs_container'),
      level = $activeTab.data('level')

    $parent.find('.tabs:first button').removeClass('active')
    $parent.find('.tab_content.' + level).removeClass('active')

    $activeTab.addClass('active')
    $activeTabContent.addClass('active')

    $('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
  }




  window.addEventListener('resize', function () {
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

    let windowW = window.outerWidth

    if (typeof WW !== 'undefined' && WW != windowW) {


      // Перезапись ширины окна
      WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


      // Моб. версия
      if (!fakeResize) {
        fakeResize = true
        fakeResize2 = false

        document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
      }

      if (!fakeResize2) {
        fakeResize2 = true

        if (windowW < 390) document.getElementsByTagName('meta')['viewport'].content = 'width=390, user-scalable=no'
      } else {
        fakeResize = false
        fakeResize2 = true
      }
    }
  })



})