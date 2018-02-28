var scrollInAction = false;
var scrollActionLock = false;
var index = 1;
var maxPage = 3;

$(window).scroll(
		function() {
			if ($(window).scrollTop() >= ($(document).height()
					- $(window).height() - 600)) {

				if (scrollInAction) {
					return false;
				} else {
					scrollInAction = true;
					// do stuff // load of more content here
					loadPage();

					// scrollInAction=false; // TODO: PUT this
					// scrollInAction=false after ajax loading is completed.
				}
			}
		});

function loadPage() {
	if(!scrollActionLock) {
		$.ajax({
			url : "./view/" + index + ".html",
			type : "get",
			dataType: "html",
			contentType:"html",
			success : function(data) {
				$("#mainContent").append(data);
			}
		});
	
		index = index + 1;
	
		if (index > maxPage) 
		{
			scrollInAction = true;
		} else {
			scrollInAction = false;
		}
	}
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function loadSubPage() {
	var subpage = getUrlParameter("subPage");
	if(subpage) {
		var heading = getUrlParameter("heading");
		$('#mainContent').load("view/subpage/"+subpage+".html");
		$('#headingId').html(heading);
		$('html, body').animate({
	        scrollTop: $("#headingId").offset().top
	    }, 1000);
		scrollActionLock = true;
	}
	else {
		scrollActionLock = false;
	}
}
function showAboutMe() {
	$('#aboutMeModalId').modal();
}
function showContactMe() {
	$('#contactModalId').modal();
}

