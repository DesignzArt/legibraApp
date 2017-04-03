$(document).ready(function(){
		$("div#scrollleft").hide("fast");
	    $("#legibraprocess").click(function(){
	        $("div#scrollleft").animate({
	            width: 'toggle'

	        });
	    });
})