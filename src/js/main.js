$(function() {

  $('.redirect-btn, .navbar a, .links a').on('click', function(event) {
      event.preventDefault();
      $('.header-nav-wrap').removeClass('in');
      $('.navbar-toggle').addClass('collapsed');
  });

  var siteToggle = $('.navbar-toggler'),
      layer=$('.site__layer'),
      siteMenu= $('.main-menu-mob');


  siteToggle.on('click', function(){
    layer.toggleClass('active');
    $(this).toggleClass("collapsed");
      siteMenu.toggleClass("show");
    $('body').toggleClass('overflow-hidden');
  });


  $('.site__layer, #navbarCollapse a').on('click', function(){
    layer.removeClass('active');
    siteToggle.removeClass('collapsed');
    siteMenu.removeClass('show');
    $('body').removeClass('overflow-hidden');

    // $('.js-search-toggle').removeClass('open');
    // $('body').removeClass('search-show');
    // $('.header-find').removeClass('show');

  });
  

  $(".toggle-submenu").on('click', function(){
    $(this).parent().toggleClass("open-submenu");
  });



  function equalHeight(elem) {

    var highestBox = 0;
    var heightAuto = 'auto'
    $(elem).height(heightAuto);
    $(elem).each(function(){

      if($(this).height() > highestBox) {
        highestBox = $(this).height(); 
      }
      
    });  
    $(elem).height(highestBox);
  }
  equalHeight('.featured-icons .featured__icon');




  $('[data-typer-targets]').typer({

    // highlightSpeed    : 20,
    // typeSpeed         : 100,
    // clearDelay        : 500,
    // typeDelay         : 200,
    // clearOnHighlight  : true,
    // typerDataAttr     : 'data-typer-targets',
    // typerInterval     : 2000,

  });



  // $(window).scroll(function() {
  //     var headerscroll = $(document).scrollTop();

  //     if (headerscroll > contentHeight){
  //         jQuery('.header-fixed').addClass('fixed');
  //         // jQuery('.header-fixed').css('transform','translateY(-'+contentHeight+'px)');
  //         jQuery('.header-fixed').css('transition','all 0.3s');

  //     }else{
  //         jQuery('.header-fixed').removeClass('fixed');
  //     }
      
  //     // if (headerscroll > scrollTop){
  //     //     $('.header-fixed').removeClass('scroll-top');

  //     // }
  //     // else {
  //     //     $('.header-fixed').addClass('scroll-top');
  //     //     jQuery('.header-fixed').css('transform','translateY(0px)');
  //     //     jQuery('.header-fixed').css('transition','all 0.3s');
  //     // }
  //     scrollTop = $(document).scrollTop();
  // });



  // Sticky Menu
    var scrollTop = $(document).scrollTop();
    var headerHeight = $('.header-fixed').outerHeight();
    var contentHeight = $('.site-header').outerHeight();
    jQuery(".placeholder-header-fixed").each(function() {
        jQuery(this).css('height', headerHeight);
    });


    $(window).scroll(function() {
      var headerscroll = $(document).scrollTop();

      if (headerscroll > contentHeight){
          jQuery('.header-fixed').addClass('fixed');
          if ($(window).width() <= 992) {
            jQuery('.header-fixed').css('transform','translateY(-'+contentHeight+'px)');
          }
          jQuery('.header-fixed').css('transition','all 0.3s');

      } else{
          jQuery('.header-fixed').removeClass('fixed');
      }
      
      if (headerscroll > scrollTop){
          $('.header-fixed').removeClass('scroll-top');

      }
      else {
          $('.header-fixed').addClass('scroll-top');
          jQuery('.header-fixed').css('transform','translateY(0px)');
          jQuery('.header-fixed').css('transition','all 0.3s');
      }
      scrollTop = $(document).scrollTop();
  });


  $('.help-feedback-form__btn').on('click', toggleForm);

  function toggleForm (e) {
    e.preventDefault()
    if($('.help-feedback__slide').is(':hidden')) {
      $('.help-feedback__slide').slideToggle();
      $(this).off('click', toggleForm)
    }
    
  }















    $work_slider = $('.our-work-carousel');

    work_settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
    }

    // $work_slider.slick(work_settings);


    $(function() {
        if ($(window).width() >= 992) {
            if ($work_slider.hasClass('slick-initialized')) {
                $work_slider.slick('unslick');
            }
            return
        } else if (!$work_slider.hasClass('slick-initialized')) {
            return $work_slider.slick(work_settings);
        }
    });


});