/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Developers = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Developer,

		// Save all of the todo items under the `"todos"` namespace.
		localStorage: new Backbone.LocalStorage('point-board-backbone'),

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: function(developer) {
			return -developer.get('points');
		}
	});

	// Create our global collection of **Todos**.
	app.developers = new Developers();
})();
