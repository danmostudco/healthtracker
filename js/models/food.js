  // js/models/food.js

  var app = app || {};

  // Food Model
  // ----------

app.Food = Backbone.Model.extend({

  defaults: {
    brandName: "",
    itemName: "",
    calories: ""
  }

});