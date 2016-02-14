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
		console.log(this.$input.val());
	}

});