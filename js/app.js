$(document).ready( function () {

"use strict";

//hide html on page link click
// $("#about_me, #website, #js_games").click(function () {
// 	$("#website_container").html("");
// });
//move the tab on page link click
	$("#about_me").click(function () {
		$("#tab").animate({left: "110%"}, 1000, function () {
			$("#tab_text").html("About Me");
			$("#tab").animate({left: "6px"}, 800);
		});
	});

	$("#website").click(function () {
		$("#tab").animate({left: "110%"}, 1000, function () {
			$("#tab_text").html("Websites");
			$("#tab").animate({left: "120px"}, 800);
		});
	});

	$("#js_games").click(function () {
		$("#tab").animate({left: "110%"}, 1000, function () {
			$("#tab_text").html("JS Games");
			$("#tab").animate({left: "240px"}, 800);
		});
	});
//move the page on page link click
	$("#about_me").click(function () {
		$("#active_page").animate({left: "110%"}, 1000, function () {
			$("#active_page").animate({left: "0"}, 1000);
			$("#website_container").html("");
		});
	});

	$("#website").click(function () {
		$("#active_page").animate({left: "110%"}, 1000, function () {
			$("#active_page").animate({left: "0"}, 1000);
			$("#website_container").html("");
			websiteLinks.init();
		});
	});

	$("#js_games").click(function () {
		$("#active_page").animate({left: "110%"}, 1000, function () {
			$("#active_page").animate({left: "0"}, 1000);
			$("#website_container").html("");
			gameLinks.init();
		});
	});

/*/////////////////////////////////////////////////////////////////////////////
							WEBSITE PAGE
/////////////////////////////////////////////////////////////////////////////*/



var websiteLinks = {

	websiteArray: [
		{
			name: "Sew&So",
			description: "Fashion e-commerce",
			status: "Work In Progress",
			img: "img/SewAndSoLink.png",
			link: "BrittanyWebsite/indextwo.html";
		},

		{
			name: "Sample 1",
			description: "description...",
			status: "Null",
			img: "img/WebsiteLink.png"
		},

		{
			name: "Sample 2",
			description: "description...",
			status: "Null",
			img: "img/WebsiteLink.png"
		},

		{
			name: "Sample 3",
			description: "description...",
			status: "Null",
			img: "img/WebsiteLink.png"
		},

		{
			name: "Sample 4",
			description: "description...",
			status: "Null",
			img: "img/WebsiteLink.png"
		},

		{
			name: "Sample 5",
			description: "description...",
			status: "Null",
			img: "img/WebsiteLink.png"
		}

	],


	init: function () {
		websiteLinks.populate();
	},

	populate: function () {

		var i;
		var l = websiteLinks.websiteArray.length;

		for ( i = 0; i < l; i++){
			var markup = "<div class='website_link_holder'>";
			markup += "<div class='website_link'></div>";
			markup += "<div class='website_link_description'>";
			markup += "<a href='"+websiteLinks.websiteArray[i].link+"'><img class='siteDisplay' src="+websiteLinks.websiteArray[i].img+"><a/>";
			markup += "<h3>"+websiteLinks.websiteArray[i].name+"</h3>";
			markup += "<p>"+websiteLinks.websiteArray[i].description+"<br>";
			markup += "<em>Status</em>: "+websiteLinks.websiteArray[i].status+"</p>";
			markup += "</div>";
			markup += "</div>";

			$("#website_container").append(markup);		
		}
	},
};

//initialize website page on page load
websiteLinks.init();



/*/////////////////////////////////////////////////////////////////////////////
							ABOUT ME PAGE
/////////////////////////////////////////////////////////////////////////////*/



/*/////////////////////////////////////////////////////////////////////////////
							JS GAMES PAGE
/////////////////////////////////////////////////////////////////////////////*/



var gameLinks = {

	gameArray: [
	
		{
			name: "Game Sample 1",
			description: "description...",
			status: "Null",
			img: "img/GameLink.png"
		},

		{
			name: "Game Sample 2",
			description: "description...",
			status: "Null",
			img: "img/GameLink.png"
		},

		{
			name: "Game Sample 3",
			description: "description...",
			status: "Null",
			img: "img/GameLink.png"
		},

		{
			name: "Game Sample 4",
			description: "description...",
			status: "Null",
			img: "img/GameLink.png"
		},

		{
			name: "Game Sample 5",
			description: "description...",
			status: "Null",
			img: "img/GameLink.png"
		},

		{
			name: "Game Sample 6",
			description: "description...",
			status: "Null",
			img: "img/GameLink.png"
		}
	],


	init: function () {
		gameLinks.populate();
	},

	populate: function () {

		var i;
		var l = gameLinks.gameArray.length;

		for ( i = 0; i < l; i++){
			var markup = "<div class='game_link_holder'>";
			markup += "<div class='game_link'></div>";
			markup += "<div class='game_link_description'>";
			markup += "<a href='#''><img class='siteDisplay' src="+gameLinks.gameArray[i].img+"></a>";
			markup += "<h3>"+gameLinks.gameArray[i].name+"</h3>";
			markup += "<p>"+gameLinks.gameArray[i].description+"<br>";
			markup += "<em>Status</em>: "+gameLinks.gameArray[i].status+"</p>";
			markup += "</div>";
			markup += "</div>";

			$("#website_container").append(markup);		
		}
	},
};

});



