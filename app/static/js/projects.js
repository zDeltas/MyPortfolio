$(document).ready(function () {
    $("#searchByTags").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu a").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

(function ($) {
    $(window).on("load", function () {
        $(".brief").mCustomScrollbar({
            verticalScroll: true,
            mouseWheel: true,
            theme: "white",
        });
    });
})(jQuery);
