import Ember from 'ember';

export default Ember.Controller.extend({
  accessToFullCalendar: null,

  actions: {
    selectEvent(event) {
      this.transitionToRoute("categories.category.activities.activity.events.event", event.identifier);
    }
  }
});
