define(['jquery', 'app/dataservice', 'app/pageloader'],
	function($, dataservice, pageloader) {

		var
			buildHtml = function(data) {
				var html = '';
				if (data.results.length) {
					html += '<ol>';
					for (var i = 0; i < data.results.length; i++) {
						html += '<li>' + data.results[i].text + '</li>';
					}
					html += '</ol>';
				} else {
					html += 'No tweets from this user :(';
				}

				$('#tweets-container').empty().append(html);
			},

			getTweets = function(twitterUser) {
				pageloader.showLoader();
				dataservice.getTweets(twitterUser)
					.done(function(result) {
						console.dir(result);
						buildHtml(result);
					})
					.fail(function(result) {
						alert('FAIL!');
					})
					.always(function() {
						pageloader.hideLoader();
					});
			},

			init = function() {
				$('#twitter-button').click(function (e) {
					e.preventDefault();

					var twitterUser = $('#username').val();
					getTweets(twitterUser);
				});
			};

		return {
			init: init
		};

	});

