var app = app || {};

// The Application
// ---------------

// Our overall **AppView ** is the top-level piece of UI
app.AppView = Backbone.View.extend({

	el: "#foodApp",

	initialize: function() {
		this.$input = this.$("#searchFood");
		this.$resultsList = this.$("#resultsList");
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

	currentResults: [],

	generateResults: function() {
		// Application ID 2a832423
		// Application Keys ecdd27eeb1e72fe0be0b40dc84434a78
		// test URL https://api.nutritionix.com/v1_1/search/hamburger?results=0%3A10&cal_min=0&cal_max=2000&fields=nf_calories%2Cbrand_name%2Citem_name&appId=2a832423&appKey=ecdd27eeb1e72fe0be0b40dc84434a78

		// setting self = this seems to fix the problem of referencing another backbone view's method...
		// likely because calling $.ajax means that that jQuery becomes this
		// [TO DO] but why does a global var self = this not work if declared at initialize?? Post to forums

		var self = this;
		var foodTerm = this.$input.val().trim();
		var searchParam = "https://api.nutritionix.com/v1_1/search/" + foodTerm + "?results=0%3A10&cal_min=0&cal_max=2000&fields=nf_calories%2Cbrand_name%2Citem_name&appId=2a832423&appKey=ecdd27eeb1e72fe0be0b40dc84434a78"

		$.ajax({
			dataType: "json",
			url: searchParam,
			success: function(data) {
				self.currentResults = data.hits;
				self.buildResultList();
			}
		});
	},

	buildResultList: function() {
			this.currentResults.forEach(function(item){
				console.log(item.fields.item_name);
			});
	}
});