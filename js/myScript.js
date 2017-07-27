$(document).ready(function(){
	$('.toHide2').hide();

	$("#button4").on("click",function(){
		$(".toHide1").hide();
		$(".toHide2").show();
		$("#demo-img").html("");
		$("#demo-img").html('<img src="demo-full.gif" class="demo-image"/>');
	});


	$("#button3").on("click",function(){
		$(".toHide2").hide();
		$(".demo-image").removeAttr("src");
		$(".toHide1").show();
	});

	$("#button2").on("click",function(){
		$(".demo-image").attr("src","");
		$(".demo-image").removeAttr("src").attr("src","demo-full1.gif");
	});

	var demo = [
		'demo1.gif',
		'demo2.gif',
		'demo3.gif',
		'demo4.gif',
		'demo5.gif',
		'demo6.gif'
	];
});