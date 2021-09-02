$(function() {

    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrolloffset = $(window).scrollTop();
    var nlink = $("#nlink");



    /* header fixed*/
    chekScroll(scrolloffset);

    $(window).on("scroll", function(){
        scrolloffset = $(this).scrollTop();
        
         chekScroll(scrolloffset);
         menuchek(scrolloffset);


    });

    function chekScroll(scrolloffset){
        if (scrolloffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }   
    }
    


    /*smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this);
        var blockId = $this.data('scroll');
        var blockoffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockoffset
        }, 500);
        

    });
    
    /*menu*/
    $("#navtoggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
    });
    

});