(function () {

	var root = this;

	// Defer Qunit so RequireJS can work its magic and resolve all modules.
	QUnit.config.autostart = false;

	define('jquery', [], function() { return root.jQuery; });

})();