/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'': 'root'
		},

		root: function () {

		}
	});

	app.TodoRouter = new TodoRouter();
	Backbone.history.start();
})();
