# Health Tracker
A project developed to experiment with Backbone.js. The application queries for results from the Nutritionix API, returning brand and calorie count of the food you searched for.

You can then click to add these food items to a list, which then stores your results.

## Running the Application
Run npm install and bower install to add the dependencies to your directory.

### Functionality
The health tracker features a few pieces of functionality utilizing the Backbone.js framework

* A search bar allows the user to search the Nutrionix API for foods and calorie count on Enter
* Upon clicking a list item within the search results, that item will be added to the "Your Food" section of the app and the total calorie count updated
* An added food item can be deleted from "Your Food" by pressing the delete button
* The code utilizes local storage to preserve search results and added food items even after browser refresh