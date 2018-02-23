/**
 * 
 */
function loadPage(pageNumber){
	pageNumber = pageNumber+".html";
	$( "#mainContent" ).load( "html/"+pageNumber );
	
}