import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('event', params.event_id);
  },
  afterModel: function(model) {
    model.start = Date(model.start).toString();
    model.end = Date(model.end).toString();
    return model;
  },
  renderTemplate: function() {
    this.render("categories.category.activities.activity.events.event", {
      outlet: "event",
      into: "categories"
    });
  }
});
