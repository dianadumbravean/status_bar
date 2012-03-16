$(document).ready(function() {

	var expandTo = 60;
	var collapseTo = 20;
	var expandToMargin = expandTo;
	var collapseToMargin = collapseTo;
	var currentHeight = 0;
	var animationSpeed = 300;
	var currentHeight;

	function bindStatusUpdateClick() {
		$(".StatusUpdateTools").click(function() {
			if($("#shareText").text() == "Share what's new..") {
				$("#shareText").empty();
			}
			expandHeight();
		});
	}

	bindStatusUpdateClick();

	$("#closeIcon").click(function() {
		doNotDisplayPhotoT();
		doNotDisplayLinkT();
		currentHeight = $('.StatusUpdateTools').height();
		$("#shareText").html("Share what's new..");
		collapseHeight();
		
	});
	function expandHeight() {
		$('.StatusUpdateTools').css('height', 'auto');
		$(".StatusUpdateTools").unbind('click');
		$('.StatusUpdateTools').animate({
			minHeight : expandTo
		}, animationSpeed, function() {
			//add links active state
			$("#addPhoto").addClass('active');
			$("#addLink").addClass('active');

			//show closing icon
			$("#closeIcon").css('display', 'block');
		});
	}

	function collapseHeight() {
		$('.StatusUpdateTools').height(currentHeight);
		$('.StatusUpdateTools').css('min-height', collapseTo);
		$('.StatusUpdateTools').animate({
			height : collapseTo
		}, animationSpeed, function() {
			//add links active state
			$("#addPhoto").removeClass('active');
			$("#addLink").removeClass('active');

			//show closing icon
			$("#closeIcon").css('display', 'none');
			
			bindStatusUpdateClick();
		});
	}
	
	$("#addPhoto").click(function(){
		doNotDisplayLinkT();
		param = $(this);
		workWithPhotoTooltip(param);
	});
	
	$("#addLink").click(function(){
		doNotDisplayPhotoT();
		param = $(this);
		workWithLinkTooltip();
	});
	
	function workWithPhotoTooltip(param){
		var center, childWidth, height, pos, width;
 		
		pos = param.position();
		height = param.outerHeight();
		
		posY = pos.top + height + 8;
		posX = -$("#tooltipPhoto").width()/2;
		
		$("#arrowP").css("display", "inline-block");
		$("#closePhotoIcon").css("display", "block");
		$("#tooltipPhoto").css({"position": "absolute", "top": posY, "left": posX, "display": "block"});		
	}
	
	function workWithLinkTooltip(){
		$("#closeLinkIcon").css("display", "block");
		$("#tooltipLink").css("display", "block");		
	}
	
	$("#closePhotoIcon").click(function() {
		doNotDisplayPhotoT();
	});
	
	$("#closeLinkIcon").click(function() {
		doNotDisplayLinkT();
	});
	
	function doNotDisplayPhotoT(){
		$("#tooltipPhoto").css("display", "none");
		$("#arrowP").css("display", "none");
	}
	
	function doNotDisplayLinkT(){
		$("#tooltipLink input").empty();
		$("#tooltipLink").css("display", "none");
	}
	
});
