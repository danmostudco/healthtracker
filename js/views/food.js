var app = app || {};

// The Application
// ---------------

// Controls displaying the results
app.ResultView = Backbone.View.extend({

	template: _.template( $("#food-item").html() ),

	render: function() {
		this.$el.html( this.template(this.model.attributes) );
		return this;
	}
});