$("document").ready(function() {
    //Remove panel that appears over player during an ad
    $("#panel-ad").remove();
    //Remove pop up ad region
    $("#modal-region").remove();

    //When the title changes check if it's an ad, if it is restart the player
    $("body").on('DOMSubtreeModified', ".title-container .title", function() {
        if ($(".title-container .title").text() == "Sponsored Message") {
            console.debug("Skipping Ad");
            $("#ctl-play").click();
            $("#ctl-play").click();
        }
    });
});
