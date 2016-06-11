$(document).ready(function () {
	console.log("eccomi");
	
    $(".nav").find("li").on("click", "a", function () {
        $('#navbar-main').collapse('hide');
    });
});

function navbarMainCollapse() {
	console.log("eccomi");
	$("#navbar-main").collapse('hide');
}