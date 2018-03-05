var scrollInAction = false;
var scrollActionLock = false;
var index = 1;
var maxPage = 3;

/*
 * $(window).scroll( function() { if(index==2) { alert($(window).scrollTop() +"
 * "+$(document).height()+" "+$(window).height()); } if ($(window).scrollTop() >=
 * ($(document).height() - $(window).height() - 1000)) {
 * 
 * if (scrollInAction) { return false; } else { scrollInAction = true; // do
 * stuff // load of more content here loadPage(); // scrollInAction=false; //
 * TODO: PUT this // scrollInAction=false after ajax loading is completed. } }
 * });
 */

function loadPage() {
	if (!scrollActionLock) {
		$("#wait").css("display", "block");

		$.ajax({
			url : "./view/" + index + ".html",
			type : "get",
			dataType : "html",
			contentType : "html",
			complete : function(data) {
				
			},
			success : function(data) {
				$("#mainContent").append(data);				
			}
		
		});

		index = index + 1;

		if (index > maxPage) {
			scrollInAction = true;
		} else {
			scrollInAction = false;
		}
	}
}
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL
			.split('&'), sParameterName, i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

function loadSubPage() {
	var subpage = getUrlParameter("subPage");
	if (subpage) {
		$("#wait").css("display", "block");
		var heading = getUrlParameter("heading");
		var date = getUrlParameter("date");
		
		
		
		$.ajax({
			url : "view/subpage/" + subpage + ".html",
			type : "get",
			dataType : "html",
			contentType : "html",
			complete : function(data) {
				$("#wait").css("display", "none");
			},
			success : function(data) {
				$("#mainContent").append(data);	
				$('#headingId').html(heading);

				$('#subPageDateContainer').html(date);
				$('html, body').animate({
					scrollTop : $("#headingId").offset().top
				}, 1000);
				scrollActionLock = true;
				$("#headingId").css("background", "#FFF8DC");
				$("#pagination").css("display", "none");
			}
		
		});
		
		
		
		
		
		
		$('#mainContent').load("view/subpage/" + subpage + ".html");
		$('#headingId').html(heading);

		$('#subPageDateContainer').html(date);
		$('html, body').animate({
			scrollTop : $("#headingId").offset().top
		}, 1000);
		scrollActionLock = true;
		$("#headingId").css("background", "#FFF8DC");
		$("#pagination").css("display", "none");
		return true;
	} else {
		scrollActionLock = false;
		return false;
	}
}
function showAboutMe() {
	$('#aboutMeModalId').modal();
}
function showContactMe() {
	$('#contactModalId').modal();
}
