$( function () {
	$("#blockI").on('click', function () {
		$("#blockI").removeClass( "active" );
		$("#blockI").addClass( "inactive" );
	});
	$( "iframe" ).on({
		mouseenter: function() {
			$("#blockI").removeClass( "active" );
			$("#blockI").addClass( "inactive" );
		}, mouseleave: function() {
			$("#blockI").removeClass('inactive');
			$("#blockI").addClass( "active" );
		}
	});
	var title = "MANANTIALES DE SANTIAGO";
	for( var i = 0; i < title.length; i++){
		$("#logo").html(
			$("#logo").html() +
			"<span>" + 
			title[i] +
			"</span>"
		);
	}
});