$(document).ready(function(){  
  var length = $(".swiper-slide").length;
  var winW = $(window).height();
  console.log(winW)
    for(var i = 0; i<length;i++){
    	var num = i+1;
    	$(".swiper-slide").eq(i).css({
		    "width": "100%",
			"height": winW+'px',
			"background-image": "url(img/background"+num+".png)",
			"background-size": "cover",
			"background-position": "50% 50%",
			"background-origin": "content-box"
		})
    }
  $(".swiper-slide").height($(document).height())  
	var swiper = new Swiper('.swiper-container', {
	        paginationClickable: true,
	        direction: 'vertical',
	        height : window.innerHeight,

	        onSlideChangeStart: function(swiper){

				$(".swiper_content").css({"display":"none"});
	        },
	        onTransitionEnd: function(swiper) {
				$(".swiper_content").eq(swiper.activeIndex).css({"display":"block"});
	        }
   });
   
$("#audio-btn").click(function(){
	if (document.getElementById("media").paused) {
		
		document.getElementById("media").play()
		$(this).css("animation","chilun 1.75s linear infinite")
		
		} else{
			
			$(this).css("animation-play-state","paused")
			document.getElementById("media").pause()
		}
	})
})

