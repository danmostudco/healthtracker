var app = app || {};

// The Application
// ---------------

// Our overall **AppView ** is the top-level piece of UI
app.AppView = Backbone.View.extend({

	el: "#foodApp",

	initialize: function() {
		console.log("test");
		this.$input = this.$("#searchFood");
	},

	events: {
		"keypress #searchFood": "searchOnEnter"
	},

	searchOnEnter: function( event ) {
		// if enter key is NOT pressed or $input is empty, exit function
		if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
			return;
		}

		// else move on to this generateResults() function, which will handle API call
		this.generateResults();
	},

	generateResults: function() {
		/*
		Application ID 2a832423
		Application Keys ecdd27eeb1e72fe0be0b40dc84434a78

		test URL
		"https://api.nutritionix.com/v1_1/search/hamburger?results=0%3A10&cal_min=0&cal_max=2000&fields=nf_calories%2Cbrand_name%2Citem_name&appId=2a832423&appKey=ecdd27eeb1e72fe0be0b40dc84434a78"
		*/
		var foodTerm = this.$input.val().trim();
		var searchParam = "https://api.nutritionix.com/v1_1/search/" + foodTerm + "?results=0%3A10&cal_min=0&cal_max=2000&fields=nf_calories%2Cbrand_name%2Citem_name&appId=2a832423&appKey=ecdd27eeb1e72fe0be0b40dc84434a78"

		$.ajax({
			dataType: "json",
			url: searchParam,
			success: function(data) {
				console.log(data);
			}
		});
	}

});