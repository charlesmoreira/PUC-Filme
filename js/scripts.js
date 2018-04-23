"use strict"

$(document).ready(function(){

	$(".screenshots li.thumbnail img").click(function(){
		$(".screenshots > figure #thumbnail-big").attr("src", $(this).attr("src"));
		$(".screenshots li img").removeClass("thumb-active");
		$(this).addClass("thumb-active");
	});

});