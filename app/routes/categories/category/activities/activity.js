import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('activity', params.activity_id);
  },
  renderTemplate: function() {
    this.render("categories.category.activities.activity", {
      outlet: "activity",
      into: "categories"
    });
  }
});
