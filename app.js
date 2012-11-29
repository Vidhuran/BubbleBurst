$(function() {
    var myVideo=document.getElementById("video1"); 

	$('#playPause').on('click',function ()
	{ 
		if (myVideo.paused) 
		myVideo.play(); 
	else 
		myVideo.pause(); 
	}); 

	$('#makeBig').on('click',function ()
	{ 
		myVideo.width=560; 
	}); 

	$('#makeSmall').on('click',function ()
	{ 
		myVideo.width=320; 
	}); 

	$('#makeNormal').on('click',function ()
	{ 
		myVideo.width=420; 
	}); 

});
