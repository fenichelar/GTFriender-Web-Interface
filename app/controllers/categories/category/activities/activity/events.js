import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectEvent(event) {
      this.transitionTo("categories.category.activities.activity.events.event", event.identifier);
    }
  }
});
