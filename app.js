$(function() {

    $(".next").click(function(){

      $(".slideshow ul").animate({marginLeft:-1000}, 800, function() {

        $(this).css({marginLeft: 0}).find("li:last").after($(this).find("li:first"));

      })

    })

    $(".prev").click(function(){

      $(".slideshow ul").animate({marginRight:-1000}, 800, function() {

        $(this).css({marginRight: 0}).find("li:first").after($(this).find("li:last"));

      })

    })

});
