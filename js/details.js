$(function () {
    'use strict';
    $(".info-list li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      $('.info-content .accordion-item').hide();
      $('.' + $(this).data('class')).fadeIn();
    });
});