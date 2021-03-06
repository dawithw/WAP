"use strict";

$(function() {
	$('#hw').change(function() {
		var file = './' + $('#hw').val();
		$.ajax({
			'url': file,
			'type': 'GET',
			'success': ajaxSuccess,
			'error': ajaxFailure
		});
	});
});

function ajaxSuccess(data) {
	$('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}