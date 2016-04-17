import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var model = {};
    var events = this.modelFor('categories.category.activities.activity').get('events');
    var eventsArray = [];
    events.then(function(eventslist) {
      for (var i = 0; i < eventslist.length; i++) {
        eventsArray[i] = eventslist.currentState[i]._data;
        eventsArray[i].identifier = eventslist.currentState[i].id;
      }
      Ember.set(model, 'eventsArray', eventsArray);
    });
    Ember.set(model, 'events', events);
    Ember.set(model, 'header', {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    });
    return model;
  }
});
