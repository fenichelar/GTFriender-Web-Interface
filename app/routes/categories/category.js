import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('category', params.category_id);
  },
  renderTemplate: function() {
    this.render("categories.category", {
      outlet: this.modelFor('categories.category').get('id'),
      into: "categories"
    });
  }
});
