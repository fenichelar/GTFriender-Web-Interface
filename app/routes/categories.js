import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('category');
  },
  actions: {
    createCategory() {
      let route = this;
      let controller = this.get('controller');

      let category = this.store.createRecord('category', {
        name: controller.get('newCategoryName')
      });
      category.save().then(function() {
        controller.set('newCategoryName', '');
        route.transitionTo('categories.category.activities', category);
      })['catch'](function(error) {
        console.error(error);
      });
    }
  }
});
