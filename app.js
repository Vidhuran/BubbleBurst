$(function() {
	
	// For corss-browser support
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;
	
	// Assign the <video> element to a variable
    var video = document.getElementById('sourcevid');

	var onFailure = function(e) {
		console.log('Reeeejected!', e);
	};
	
    // Replace the source of the video element with the stream from the camera
	if (navigator.getUserMedia) {
		navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
			video.src = window.URL.createObjectURL(localMediaStream);
		}, onFailure);
	} else {
		video.src = 'video2.ogg'; // fallback.
	}
	
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
