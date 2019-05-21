$(function(){
		   
	//从底部上升的遮罩效果开始
	$(".con ul li").hover(function(){
		$(this).find(".txt").stop().animate({height:"318px"},200);
		$(this).find(".txt h3").stop().animate({paddingTop:"60px"},200);
	},function(){
		$(this).find(".txt").stop().animate({height:"45px"},200);
		$(this).find(".txt h3").stop().animate({paddingTop:"0"},200);
	})
	
	
	$(".case_li").hover(function(){
		$(this).find(".txt").stop().animate({height:"318px"},200);
		$(this).find(".txt h3").stop().animate({paddingTop:"60px"},200);
	},function(){
		$(this).find(".txt").stop().animate({height:"45px"},200);
		$(this).find(".txt h3").stop().animate({paddingTop:"0"},200);
	})
	
	
	
	//从底部上升的遮罩效果结束
	
	
	//直接显示遮罩效果开始
	$(".con-two").hover(function(){
		$(this).find(".txt-two").css("display","block");
		},function(){
			$(this).find(".txt-two").css("display","none");
	})
	
	$(".product_listli").hover(function(){
		$(this).find(".txt").css("display","block");
		},function(){
			$(this).find(".txt").css("display","none");
	})
	
	$(".case_list ul li").hover(function(){
		$(this).find(".txt").css("display","block");
		},function(){
			$(this).find(".txt").css("display","none");
	})
	

	
	
	
	//直接显示遮罩效果结束
	
	
	//从左上部显示遮罩效果 开始
	$(".con-three").hover(function() {
		$(this).find(".txt-three").stop().animate({"left": 0,"top":0});
	}, function() {
		$(this).find(".txt-three").stop().animate({"left":-297,"top":-198});
	})
	//从左上部显示遮罩效果 结束
	
	
	//从左侧显示遮罩效果 开始
	$(".con-four").hover(function() {
		$(this).find(".txt-four").stop().animate({"left": 0});
	}, function() {
		$(this).find(".txt-four").stop().animate({"left":-297});
	})
	//从左侧显示遮罩效果 结束
	
	
	//图片放大效果 开始
	$(".con-five").hover(function() {
		$(this).find(".conimg").stop().animate({"width":260,"height":250});
	}, function() {
		$(this).find(".conimg").stop().animate({"width":280,"height":270});
	})
	


	
	
	
	
	$(".con-six1").hover(function() {
		
		$(this).find(".txt-six1").css("display","block");
	}, function() {
		
		$(this).find(".txt-six1").css("display","none");
	})
	
	
	
	//图片放大效果 结束
	
	
	//图片放大效果伴随蒙版文字出现 开始
	$(".con-six").hover(function() {
		$(this).find(".conimg-two").stop().animate({"width":500,"height":400});
		$(this).find(".txt-six").css("display","block");
	}, function() {
		$(this).find(".conimg-two").stop().animate({"width":520,"height":420});
		$(this).find(".txt-six").css("display","none");
	})
	//图片放大效果伴随蒙版文字出现 结束
	
});
