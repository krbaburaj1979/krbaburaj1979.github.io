var scrollInAction = false;
var index = 1;
var maxPage = 3;

$(window).scroll(
		function() {
			if ($(window).scrollTop() >= ($(document).height()
					- $(window).height() - 200)) {

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

function showAboutMe() {
	$('#aboutMeModalId').modal();
}
function showContactMe() {
	$('#contactModalId').modal();
}

function loadMe() {
	alert(1);
	$.ajax({
		url : "./a.html",
		type : "get",
		dataType: "html",
		contentType:"html",
		success : function(data) {
			$("#mainContent").append("babu");
		}
	});
}