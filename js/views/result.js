var app = app || {};

// The Application
// ---------------

// Controls displaying the results
app.ResultView = Backbone.View.extend({

	class: "clickMe",

	template: _.template( $("#result-item").html() ),

	events: {
		"click .clicker": 'addToFoodList'
	},

	render: function() {
		this.$el.html( this.template(this.model.attributes) );
		return this;
	},

	addToFoodList: function() {
		app.FoodList.create({
			brandName: this.model.get("brandName"),
			itemName: this.model.get("itemName"),
			calories: this.model.get("calories")
		});
	}
});