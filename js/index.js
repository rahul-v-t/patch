$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
    });

    $("#faq .tab_head a").on("click",function(){
        var $this = $(this);
        $("#faq .tab_head a").removeClass("active");
        $(this).addClass("active");
        let clicked_tab = $this.data("id");
        $("#faq .tab_body div.item").removeClass("active");
        $(`#${clicked_tab}`).addClass("active");
    });
});