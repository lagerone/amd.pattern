(function () {

	var root = this;

	define('jquery', [], function() { return root.jQuery; });

	require(['app/twitterApp'], function(app) {
		app.init();
	});

})();

