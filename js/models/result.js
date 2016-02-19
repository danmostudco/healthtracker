var app = app || {};

// Result Model
// -------------
// This will hold the data attributes for each result, which can
// then be passed to a more permanent state

app.Result = Backbone.Model.extend({

	defaults: {
		brandname: "",
		itemName: "",
		calories: ""
	}

});