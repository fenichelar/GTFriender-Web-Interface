import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var model = {};
    var category = this.modelFor('categories.category').get('id');
    var activity = this.modelFor('categories.category.activities.activity').get('id');
    var events = this.modelFor('categories.category.activities.activity').get('events');
    var eventsArray = [];
    events.then(function(eventslist) {
      for (var i = 0; i < eventslist.length; i++) {
        eventsArray[i] = eventslist.currentState[i]._data;
        eventsArray[i].url = "/categories/" + category + "/activities/" + activity + "/events/" + eventslist.currentState[i].id;
      }
      Ember.set(model, 'eventsArray', eventsArray);
    });
    Ember.set(model, 'events', events);
    return model;
  }
});
