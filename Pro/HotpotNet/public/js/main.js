// JavaScript Document
//头部下拉菜单
$(function(){
	$(".nav li").hover(
		function(){
			if($(this).find(".two_nav").length>0){
		    	$(this).addClass("hover2");
			}
			$(this).find(".two_nav").fadeIn(300);
		},function(){
			$(this).removeClass("hover2");
			$(this).find(".two_nav").fadeOut(300);
	});
	
	$(window).scroll(function () {
		var hei = $(document).scrollTop(); 	
		if(hei > 0){
			$(".headBox").addClass("headSlide");
		}else{
			$(".headBox").removeClass("headSlide");
		}
	});

});
	
	
//选择地区/语言
$(function(){	
	$(".e_md .lang").hover(function(){
		$(".radius_3").stop().slideToggle(400);
	});
});
	
	

//首页解决方案	
$(function(){
	var _index5=1;
	var len=Math.ceil($(".solutionList .plan_box li").length / 3);
	$(".solutionList #scheme_next").click(function(){
		if(_index5==len){
			$(".solutionList .plan_box ul").stop().animate({left:0},500);
			_index5=1;
		}
		else{
			$(".solutionList .plan_box ul").stop().animate({left:-(_index5*1200)},500);
			_index5++;
		}
	});
	
	$(".solutionList #scheme_prev").click(function(){
		if(_index5==1){
			_index5=len;
			$(".solutionList .plan_box ul").stop().animate({left:-(_index5-1)*1200},500);
		}
		else{
			_index5--;
			$(".solutionList .plan_box ul").stop().animate({left:-(_index5-1)*1200},500);
		}
	});
});



//首页新闻列表切换
$(function(){
	$(".news-group .news-group-title li").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		var index = $(this).index();
		$(".news-group-content .group-item").eq(index).show().siblings().hide();
	});
});



//底部分享
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];



//产品详情页标题切换
$(function(){
	$(".InBanner .crumb .crumbBox ul li").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
	});
});



//详情页尺寸规格选择切换
	$(function(){
		var aLi = $('#pro_img_list').find('li');
	    aLi.on('click', function(){
	        $(this).addClass('act').siblings().removeClass('act');
	        $('#pro_img').hide().attr('src',$(this).find('img').attr('src')).fadeIn();
	    }).eq(0).trigger('click');
		
		if($('.pro_size').size()>0){
		
	    $('.pro_size_list').each(function(){
	    	$(this).find('li').each(function(index){
	    		if ((index + 1) % 6 == 0){
					$(this).css('marginRight','0');
				}	
	    	})
		})

		$('.pro_table tbody').find('tr').each(function(index){
    		if ((index + 1) % 2 == 0){
				$(this).css('background','#e8e8e8');
			}	
		})


		var sNum = 0;
		var iTop = $('.pro_size').offset().top;
		function stupid(num){
			sNum = num;
			$('.pro_size_list').each(function(){
				$(this).find('li').eq(sNum).addClass('act').siblings().removeClass('act');
			})
			$('.pro_table').hide().eq(sNum).fadeIn();
		}
		$('.pro_size_list').find('li').on('click',function(){
			stupid($(this).index());
		}).eq(0).trigger('click');
		$('#pro_size01').find('li').on('click',function(){
			$('html, body').animate({scrollTop:iTop});
		})

		$('.pro_related').find('li').each(function(index){
			if ((index + 1) % 2 == 0){
				$(this).css('float','right');
			}
		})
		}
	})



//关于我们页面--公司能力
$(function(){
	$(".switch .titList li").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		var i = $(this).index();
		$(".switch .switchList .switchBox").eq(i).show().siblings().hide();
	});
	$(".switch .switchList .switchBox .switchInfo ul").each(function(index, element) {
        $(this).find("li:odd").addClass("right");
    });
});



//关于我们页面--合作客户
$(function(){
	var _index5=1;
	var len=$(".flashBg .customerList ul.mobile").length;
	$("#customer .but_right img").click(function(){
		if(_index5==len){
			$("#customer .flashBg .customerList").stop().animate({left:0},500);
			_index5=1;
		}
		else{
			$("#customer .flashBg .customerList").stop().animate({left:-(_index5*960)},500);
			_index5++;
		}
	});
	
	$("#customer .but_left img").click(function(){
		if(_index5==1){
			_index5=len;
			$("#customer .flashBg .customerList").stop().animate({left:-(_index5-1)*960},500);
		}
		else{
			_index5--;
			$("#customer .flashBg .customerList").stop().animate({left:-(_index5-1)*960},500);
		}
	});
});



//返回顶部
$(function(){
	$("#sideTool .goTop").click(function(){
		$("html,body").animate({scrollTop:0},500)
	});
});
$(function(){
$(".InBanner .crumb .crumbBox ul li.cooperation").click(function(){
		$(".content .conWidth .policylist").hide();
		$(".content .conWidth .policyy").hide();
		$(".content .conWidth .cooperationlist").show();
		});
	$(".InBanner .crumb .crumbBox ul li.policy").click(function(){
		$(".content .conWidth .policyy").hide();
		$(".content .conWidth .cooperationlist").hide();
		$(".content .conWidth .policylist").show();
		});
});