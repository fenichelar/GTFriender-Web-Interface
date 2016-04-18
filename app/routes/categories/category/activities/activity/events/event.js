import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('event', params.event_id);
  },
  renderTemplate: function() {
    this.render("categories.category.activities.activity.events.event", {
      outlet: "event",
      into: "categories"
    });
  },
  actions: {
    submit() {
      let controller = this.get('controller');

      this.store.findRecord('event', this.modelFor('categories.category.activities.activity.events.event').get('id')).then(function(event) {
        event.set('title', controller.get('title'));
        event.set('location', controller.get('location'));
        event.set('start', new Date(controller.get('start')));
        event.set('end', new Date(controller.get('end')));
        event.save().then(function() {
          Ember.$("#viewButton").click();
        })['catch'](function(error) {
          console.error(error);
        });
      });
    },
    deleteEvent() {
      
    }
  }
});
