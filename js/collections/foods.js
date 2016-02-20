var app = app || {};

// Added Food Collection
// ------------------


var FoodList = Backbone.Collection.extend({

	model: app.Food,

	// save all of the results under the "result"
	localStorage: new Backbone.LocalStorage("foodStorage"),

	clearFood: function(){
		_.invoke(this.toArray(), 'destroy');
		// clears out the collection
		// taken from http://stackoverflow.com/questions/26207835/destroy-all-models-in-backbone-collection-persisted-in-local-storage
	}

});

// create a global collection of results
app.FoodList = new FoodList();