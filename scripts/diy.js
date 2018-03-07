function loadPage(page) {
	$.ajax({
		url : "./view/" + page + ".html",
		type : "get",
		dataType : "html",
		contentType : "html",
		complete : function(data) {
			$("html, body").animate({
				scrollTop : 0
			}, "slow");
			$("#wait").css("display", "none");
		},
		success : function(data) {
			$("#mainContent").html(data);
			$("#pagination").css("display", "block");
			
		}

	});
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
				
				$('html, body').animate({
					scrollTop : $("#headingId").offset().top
				}, 1000);
				$("#wait").css("display", "none");
			},
			success : function(data) {
				$("#mainContent").append(data);
				$('#headingId').html(heading);

				$('#subPageDateContainer').html(date);
				
				$("#headingId").css("background", "#FFF8DC");
				$("#pagination").css("display", "none");
			}

		});

		return true;
	} else {
		return false;
	}
}
function showAboutMe() {
	$('#aboutMeModalId').modal();
}
function showContactMe() {
	$('#contactModalId').modal();
}
