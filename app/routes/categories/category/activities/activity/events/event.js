import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render("categories.category.activities.activity.events.event", {
      outlet: "event",
      into: "categories"
    });
  }
});
