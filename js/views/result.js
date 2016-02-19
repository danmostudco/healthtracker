var app = app || {};

// The Application
// ---------------

// Controls displaying the results
app.ResultsView = Backbone.View.extend({

	el: "li",

	template: _.template( $("#result-template").html() )

});