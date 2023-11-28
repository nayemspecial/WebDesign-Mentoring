/* $(document).ready(function(){
            
     $(".hide").click(function(){
         $("h1").hide();
     });

     $(".show").click(function(){
         $("h1").show();
     });

     $('.owl-carousel').owlCarousel(function(){
         items:1,
         loop:true,
         nav:true
     });

 });
 */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:true
    });
});

