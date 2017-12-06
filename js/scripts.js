// Scroll to desired navigation item with a click -->
var lastId,
    topMenu = $("#hamburger"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find(".nav-link"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('.carousel-control-next')
        .not('.carousel-control-prev')
        .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                });
            }
        }
    });
// Highlight current navigation item when scrolling -->
$(window).scroll(function(){
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active-element")
            .end().filter("[href='#"+id+"']").parent().addClass("active-element");
    }
}); 
// Turn off auto-sliding through carousel -->
$('.carousel').carousel({
    interval: false
})
// Show the financial sparks carousel & hide the first page financial sparks carousel -->
$("#show-the-financial-sparks-carousel-button").click(
    function() {
        $("#first-financial-sparks-carousel").animate({"right": "0vw"}, 600);
        $("#first-financial-sparks-carousel").css({"display": "block"});
    }
);

$("#hide-the-first-financial-sparks-carousel-button").click(
    function() {
        $("#first-financial-sparks-carousel").animate({"right": "-100vw"});
        $("#first-financial-sparks-carousel").css({"display": "none"});
    }
);
// Show the intellectual sparks carousel & hide the first page of intellectual sparks carousel -->
$("#show-the-intellectual-sparks-carousel-button").click(
    function() {
        $("#first-intellectual-sparks-carousel").animate({"right": "0vw"}, 600);          
        $("#first-intellectual-sparks-carousel").css({"display": "block"});
    }
);

$("#hide-the-first-intellectual-sparks-carousel-button").click(
    function() {
        $("#first-intellectual-sparks-carousel").animate({"right": "-100vw"});
        $("#first-intellectual-sparks-carousel").css({"display": "none"});
    }
);
// Show the second page of intellectual sparks carousel & hide the second page intellectual sparks carousel -->
$("#show-the-second-page-of-intellectual-sparks").click(
    function() {
        $("#second-intellectual-sparks-carousel").animate({"right": "0vw"}, 1);
        $("#second-intellectual-sparks-carousel").css({"display": "block"});
    }
);

$("#hide-the-second-intellectual-sparks-carousel-button").click(
    function() {
        $("#second-intellectual-sparks-carousel, #first-intellectual-sparks-carousel").animate({"right": "-100vw"});
        $("#second-intellectual-sparks-carousel, #first-intellectual-sparks-carousel").css({"display": "none"});
    }
);
// Show the third page of intellectual sparks & hide the third page of intellectual sparks carousel -->    
$("#show-the-third-page-of-intellectual-sparks").click(
    function() {
        $("#third-intellectual-sparks-carousel").animate({"right": "0vw"}, 1);
        $("#third-intellectual-sparks-carousel").css({"display": "block"});
    }
);

$("#hide-the-third-intellectual-sparks-carousel-button").click(
    function() {
        $("#third-intellectual-sparks-carousel, #second-intellectual-sparks-carousel, #first-intellectual-sparks-carousel").animate({"right": "-100vw"});
        $("#third-intellectual-sparks-carousel, #second-intellectual-sparks-carousel, #first-intellectual-sparks-carousel").css({"display": "none"});
    }
);
// Go back to the first page of intellectual sparks -->
$("#go-back-to-the-first-page-of-intellectual-sparks").click(
    function() {
        $("#second-intellectual-sparks-carousel").animate({"right": "-100vw"}, 1);
        $("#second-intellectual-sparks-carousel").css({"display": "none"});
    }
);
// Go back to the second page of intellectual sparks -->
$("#go-back-to-the-second-page-of-intellectual-sparks").click(
    function() {
        $("#third-intellectual-sparks-carousel").animate({"right": "-100vw"}, 1);
        $("#third-intellectual-sparks-carousel").css({"display": "none"});
    }
);
// Show the physical sparks carousel & hide the first page of physical sparks carousel -->
$("#show-the-physical-sparks-carousel-button").click(
    function() {
        $("#first-physical-sparks-carousel").animate({"right": "0vw"}, 600);
        $("#first-physical-sparks-carousel").css({"display": "block"});
    }
);

$("#hide-the-first-physical-sparks-carousel-button").click(
    function() {
        $("#first-physical-sparks-carousel").animate({"right": "-100vw"});
        $("#first-physical-sparks-carousel").css({"display": "none"});
    }
);

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});