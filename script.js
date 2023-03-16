$(document).ready(function() {
			var url = "https://www.reddit.com/r/showerthoughts/top.json?t=week";
			$.getJSON(url, function(data) {
				var posts = data.data.children;
				var html = "<ul class='post-list'>";
				for (var i = 0; i < 3; i++) { // Only loop through the first 3 posts
					var post = posts[i].data;
					html += "<li class='post'>";
					html += "<h3>" + post.title + "</h3>";
					if (post.is_self) {
						html += "<p>" + post.selftext + "</p>";
					}
					html += "</li>";
				}
				html += "</ul>";
				$("#reddit-posts").html(html);
			});
		});


		$(document).ready(function() {
			var url = "https://www.reddit.com/r/ArtificialInteligence/top.json?t=week";
			$.getJSON(url, function(data) {
				var posts = data.data.children;
				var html = "<ul class='post-list'>";
				for (var i = 0; i < 1; i++) { // Only loop through the first 1 posts
					var post = posts[i].data;
					html += "<li class='post'>";
					html += "<h3>" + post.title + "</h3>";
					if (post.is_self) {
						html += "<p>" + post.selftext + "</p>";
					}
					html += "</li>";
				}
				html += "</ul>";
				$("#reddit-posts-life").html(html);
			});
		});
		
		$(document).ready(function() {
			var url = "https://www.reddit.com/r/philosophy/top.json?t=week";
			$.getJSON(url, function(data) {
				var posts = data.data.children;
				var html = "<ul class='post-list'>";
				for (var i = 0; i < 3; i++) { // Only loop through the first 1 posts
					var post = posts[i].data;
					html += "<li class='post'>";
					html += "<h3>" + post.title + "</h3>";
					if (post.is_self) {
						html += "<p>" + post.selftext + "</p>";
					}
					html += "</li>";
				}
				html += "</ul>";
				$("#reddit-posts-philosophy").html(html);
			});
		});
		
		$(document).ready(function() {
			var url = "https://www.reddit.com/r/quotes/top.json?t=week";
			$.getJSON(url, function(data) {
				var posts = data.data.children;
				var html = "<ul class='post-list'>";
				for (var i = 0; i < 3; i++) { // Only loop through the first 1 posts
					var post = posts[i].data;
					html += "<li class='post'>";
					html += "<h3>" + post.title + "</h3>";
					if (post.is_self) {
						html += "<p>" + post.selftext + "</p>";
					}
					html += "</li>";
				}
				html += "</ul>";
				$("#reddit-posts-quotes").html(html);
			});
		});
