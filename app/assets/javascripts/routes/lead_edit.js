App.LeadEditRoute = Ember.Route.extend({

  // Using out route hooks to set template properties
  activate: function() {
    this.controllerFor('lead').set('isEditing', true) 
  },

  deactivate: function() {
    this.controllerFor('lead').set('isEditing', false) 
  }

})