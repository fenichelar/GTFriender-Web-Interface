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
      let route = this;
      let controller = this.get('controller');

      let event = this.store.createRecord('event', {
        title: controller.get('title'),
        location: controller.get('location'),
        start: new Date(controller.get('start')),
        end: new Date(controller.get('end')),
        activity: this.modelFor('categories.category.activities.activity')
      });
      event.save().then(function() {
        route.transitionTo('categories.category.activities.activity.events.event', event);
      })['catch'](function(error) {
        console.error(error);
      });
    }
  }
});
