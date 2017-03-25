$("document").ready(function() {
    $("#panel-ad").remove();
    $("#modal-region").remove();

    $("body").on('DOMSubtreeModified', ".title-container .title", function() {
        if ($(".title-container .title").text() == "Sponsored Message") {
            $("#ctl-play").click();
            $("#ctl-play").click();
        }
    });
});
