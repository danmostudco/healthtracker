var app = app || {};

// The Application
// ---------------

// Controls displaying the results
app.ResultView = Backbone.View.extend({

	class: "clickMe",

	template: _.template( $("#result-template").html() ),

	events: {
		"click .clicker": 'addToFood',
	},

	render: function() {
		this.$el.html( this.template(this.model.attributes) );
		return this;
	},

	addToFood: function() {
		console.log("click triggered");
	}

});