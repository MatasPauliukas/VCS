
jQuery(document).ready(function() {
    jQuery('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            800:{
                items:3
            },
            600:{
                items:2
            },
            400:{
                items:1
            },
            200:{
                items:1
            },
        }
    })
});