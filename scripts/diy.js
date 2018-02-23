/**
 * 
 */
function loadPage(pageNumber){
	pageNumber = pageNumber+".html";
	$( "#mainContent" ).load( "html/"+pageNumber );
	
}
$('#pagination-demo').twbsPagination({
    totalPages: 3 ,
    visiblePages: 3,
    onPageClick: function (event, page) {
        loadPage(page);
    }
});