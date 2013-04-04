App.IndexController = Ember.ObjectController.extend({

  submit: function(user){
    console.log("submitting!");
    this.get('content').get('transaction').commit();
  },

  _transitionOnSuccess: function(stuff) {
    if (this.get('content.id') && this.get('content.id').length > 0) {
      console.log("_transitionOnSuccess");
      this.transitionToRoute('success');
    }
  }.observes('content.id')

});
