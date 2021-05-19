(function ($) {
    $.fn.timeline = function () {
        var cursor = {
            id: $(this),
            item: $(this).find(".item"),
            activeItem: "item--active",
            img: ".content-img"
        };
        cursor.item.eq(0).addClass(cursor.activeItem);

        var itemLength = cursor.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            cursor.item.each(function (i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;

                if (pos <= max - 0 && pos >= min) {
                    cursor.item.removeClass(cursor.activeItem);
                    $(this).addClass(cursor.activeItem);    
                }else if($(window).scrollTop() + $(window).height() > $(document).height()-10) {
                    cursor.item.removeClass(cursor.activeItem);
                    cursor.item.last().addClass(cursor.activeItem);
                    window.scroll({top: 0, behavior: "smooth"})
                }

            });
        });
    };
})(jQuery);
