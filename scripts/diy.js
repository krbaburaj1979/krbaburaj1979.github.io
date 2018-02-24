/**
 * 
 */
function loadPage(pageNumber){
	pageNumber = pageNumber+".html";
	$( "#mainContent" ).load( "view/"+pageNumber );
	$('html, body').animate({ scrollTop: 0 }, 'fast');
	
}
$('#pagination-demo').twbsPagination({
    totalPages: 3,
    visiblePages: 3,
    hideOnlyOnePage:true,
    onPageClick: function (event, page) {
        loadPage(page);
    }
});