var element = document.getElementById("panel-ad");
element.parentNode.removeChild(element);

var curent_song_title = document.getElementsByClassName("title-container")[0].getElementsbyClassName("title")[0];

current_song_title.onchange=function(current_song_title) {
	if (current_song_title.innerHTML == "Sponsored Message") {
		alert("Stopping an Ad!");
		document.getElementById("ctl-play").click();
		document.getElementById("ctl-play").click();
	}
};