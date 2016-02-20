var app = app || {};

// The Application
// ---------------

// Controls displaying the results
app.FoodView = Backbone.View.extend({

	template: _.template( $("#food-item").html() ),

	events: {
		"click .deleter": 'deleteFoodItem'
	},

	render: function() {
		this.$el.html( this.template(this.model.attributes) );
		return this;
	},

	deleteFoodItem: function(){
		this.model.destroy();
	}
});