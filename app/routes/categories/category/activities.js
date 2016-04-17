import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('categories.category').get('activities');
  },
  actions: {
    createActivity() {
      let route = this;
      let controller = this.get('controller');

      let activity = this.store.createRecord('activity', {
        name: controller.get('newActivityName'),
        category: this.modelFor('categories.category')
      });
      activity.save().then(function() {
        controller.set('newActivityName', '');
        route.transitionTo('categories.category.activities.activity.events', activity);
      })['catch'](function(error) {
        console.error(error);
      });
    }
  }
});
