import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render("categories.category.activities.activity.events.add", {
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
        description: controller.get('description'),
        start: new Date(controller.get('start')),
        end: new Date(controller.get('end')),
        activity: this.modelFor('categories.category.activities.activity')
      });
      event.save().then(function() {
        controller.set('title', '');
        controller.set('location', '');
        controller.set('start', '');
        controller.set('end', '');
        route.transitionTo('categories.category.activities.activity.events.event', event);
        window.location.reload(true);
      })['catch'](function(error) {
        console.error(error);
      });
    }
  }
});
