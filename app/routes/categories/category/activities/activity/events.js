import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('categories.category.activities.activity').get('events');
  }
});
