$(document).ready(function() {
    var url = "https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/quotes/top.json?t=week";
    $.getJSON(url, function(data) {
        var posts = data.data.children;
        var html = "<ul>";
        for (var i = 0; i < 3; i++) {
            var post = posts[i].data;
            html += "<li>" + post.title + "</li>";
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
