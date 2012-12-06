define(['jquery', 'app/pageloader'],
	function ($, pageloader) {

		test('Test that element is created', function() {
			// ARRANGE

			// ACT
			var loader = $('#loader'),
				loaderText = loader.find('div').html();

			// ASSERT
			ok(loader.length, 'Element has length');
			equal(loader.attr('id'), 'loader', 'Loader has id loader');
			equal(loaderText, 'Loading...', 'Loader has text Loading...');

			// RESET
		});

		test('Test that loader is hidden by default', function() {
			// ARRANGE

			// ACT
			var loader = $('#loader');

			// ASSERT
			ok(!loader.is(':visible'), 'Loader is not visible');

			// RESET
		});

		test('Show loader shows the loader', function() {
			// ARRANGE
			var loader = $('#loader');

			// ACT
			pageloader.showLoader();

			// ASSERT
			ok(loader.is(':visible'), 'Loader is not visible');

			// RESET
			loader.hide();
		});

		asyncTest('Hide loader hides the loader', function() {
			// ARRANGE
			var loader = $('#loader');
			loader.show();

			// ACT
			pageloader.hideLoader();
			

			// ASSERT
			stop(); // Stop the testrunner to wait for async tests to run. Call start() to continue.
			setTimeout(function() {
				start();
				ok(!loader.is(':visible'), 'Loader is not visible');

				// RESET
				loader.hide();
			}, 1000);
		});

		QUnit.start();
	});