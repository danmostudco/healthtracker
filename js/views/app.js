var app = app || {};

// The Application
// ---------------

// Our overall **AppView ** is the top-level piece of UI
app.AppView = Backbone.View.extend({

	el: "#foodApp",

	initialize: function() {
		this.$input = this.$("#searchFood");
		this.$resultsList = this.$("#resultsList");

		this.listenTo(app.Results, 'add', this.renderResult);
		this.listenTo(app.FoodList, 'add', this.renderFood);
		this.listenTo(app.FoodList, 'all', this.renderAllFood);

		app.Results.fetch();
		app.FoodList.fetch();

		// if a search was run, ensure results stay even if page is refreshed
		this.renderAllResults();
		this.renderAllFood();
	},

	events: {
		"keypress #searchFood": "searchOnEnter",
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
				self.buildResultList();
			},
			error: function() {
				self.displayError();
			}
		});
	},

	buildResultList: function() {
		this.clearResultList();
		this.currentResults.forEach(function(item){
			// store the item's name
			var passedBrandName = item.fields.brand_name;
			var passedItemName = item.fields.item_name;
			var passedCalories = item.fields.nf_calories;

			app.Results.create({
				brandName: passedBrandName,
				itemName: passedItemName,
				calories: passedCalories
			});
		});
	},

	// ####
	// Functions utilized by the RESULTS LIST portion
	// ###

	clearResultList: function() {
		app.Results.clearResults();
		$("#resultsList").empty();
	},

	renderResult: function( result ) {
		var view = new app.ResultView({model: result});
		$("#resultsList").append( view.render().el);
	},

	renderAllResults: function () {
		$("#resultsList").empty();
		app.Results.each(this.renderResult, this);
	},


	// ####
	// Functions utilized by the FOOD LIST portion
	// ###

	renderFood: function( result ) {
		var view = new app.FoodView({model: result});
		$("#foodList").append( view.render().el);
	},

	renderAllFood: function() {
		$("#foodList").empty();
		app.FoodList.each(this.renderFood, this);
		this.renderCalories();
	},

	renderCalories: function() {
		var calorieUI = $("#calorieCount");
		var currentTotal = app.FoodList.sumCalories();

		calorieUI.empty();
		calorieUI.html(currentTotal + " calories");

	},

	displayError: function() {
		this.clearResultList();
		$("#resultsList").append("<li class='list-group-item'>" + "Could not retrieve results" + "</li>");
	}

});