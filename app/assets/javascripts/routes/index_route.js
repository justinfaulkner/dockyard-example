App.IndexRoute = Ember.Route.extend({
  model: function() {
    return null;
  },

  setupController: function(controller) {
    controller.startEditing();
  }

});