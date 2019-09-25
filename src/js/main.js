$(function() {

  var toggleMenu = $('.header__toggle-nav'),
      layer=$('.site__layer'),
      siteMenu= $('.main-menu');

  // var toggleMenu = $(".header__toggle-nav");
  toggleMenu.html(toggleMenu.data("text"));


  toggleMenu.on('click', function(){

    var el = $(this);
    var swap = el.data("swap");
    var text = el.data("text");
    el.data("text", swap);
    el.data("swap", text);
    el.html(swap);

    layer.toggleClass('active');
    $(this).toggleClass("collapsed");
    siteMenu.toggleClass("show");
    $('body').toggleClass('menu-active');
  });


  $('.site__layer, .header-nav a').on('click', function(){
    layer.removeClass('active');
    toggleMenu.removeClass('collapsed');
    siteMenu.removeClass('show');
    $('body').removeClass('menu-active');
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

  // var headerHeight = 0;

  // $(window).resize(function() {

  //     setTimeout(function() {
  //       headerHeight = $('.header').innerHeight();
  //     }, 3000) 


       
      
  //     $('.main-menu').css({'margin-top': $('.header').css('height'), 'height' : 'calc(100% - ' + headerHeight + 'px)'});

  //  })

  // .resize();








});