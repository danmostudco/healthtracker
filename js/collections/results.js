var app = app || {};

// Results Collection
// ------------------

// The collection of search results is backed by localStorage instead
// of a remote server (for now)

var ResultList = Backbone.Collection.extend({

	model: app.Result,

	// save all of the results under the "result"
	localStorage: new Backbone.LocalStorage("resultsStorage"),

	clearResults: function(){
		this.reset();
	}

});

// create a global collection of results
app.Results = new ResultList();