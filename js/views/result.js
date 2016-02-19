var app = app || {};

// The Application
// ---------------

// Controls displaying the results
app.ResultsView = Backbone.View.extend({

	el: "#resultsList",

	initialize: function() {
		this.listenTo(app.Results, "reset", this.generateResults);
		this.$input = this.$("#searchFood");
		this.$resultsList = this.$("#resultsList");
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
		var self = this;
		var foodTerm = this.$input.val().trim();
		var searchParam = "https://api.nutritionix.com/v1_1/search/" + foodTerm + "?results=0%3A10&cal_min=0&cal_max=2000&fields=nf_calories%2Cbrand_name%2Citem_name&appId=2a832423&appKey=ecdd27eeb1e72fe0be0b40dc84434a78"

		$.ajax({
			dataType: "json",
			url: searchParam,
			success: function(data) {
				self.currentResults = data.hits;
				console.log(data.hits);
				self.buildResultList();
			}
		});
	},

	buildResultList: function() {

	}

});