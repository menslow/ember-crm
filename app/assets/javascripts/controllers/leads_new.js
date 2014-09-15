App.LeadsNewController = Ember.Controller.extend({

  actions: {

    createLead: function() {
      var self = this,
        fields = this.get('fields');

      if (App.Lead.valid(fields)) {
        var lead = this.store.createRecord('lead', this.get('fields'));
        lead.save().then(function(lead) {
          self.transitionToRoute('lead', lead);
        });
      } else {
        this.set('showError', true)
      }
    }

  }

});	