define(['jquery'],
	function($) {

		var
			getTweets = function(twitterUser) {
				return $.ajax({
					url: 'http://search.twitter.com/search.json?q=from:' + twitterUser,
					dataType: 'jsonp'
				});
			};

		return {
			getTweets: getTweets
		};

	});

