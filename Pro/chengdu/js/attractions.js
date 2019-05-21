$(function(){
	$('.switch>div').hover(function(){
		$(this).addClass("active");
		$('.switch>div').not($(this)).removeClass("active");
		var svar=$(this).attr("s");
		//alert(svar+" "+(svar==1));
		if(svar==1){
			$(".attr_body").css({
				"background":"url(../images/att_img/chunxi.jpg)",
				"backgroundSize":"100% 100%"
			});
		}
		else if(svar==2){
			$(".attr_body").css({
				"background":"url(../images/att_img/xiangzi.jpg)",
				"backgroundSize":"100% 100%"
			});
		}else{
			$(".attr_body").css({
				"background":"url(../images/att_img/caotang.jpg)",
				"backgroundSize":"100% 100%"
			});
		}
	});
});