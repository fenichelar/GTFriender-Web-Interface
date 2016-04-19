import Ember from 'ember';
import config from '../../../../../../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('event', params.event_id);
  },
  renderTemplate: function() {
    this.render("categories.category.activities.activity.events.event", {
      outlet: "event",
      into: "categories"
    });
  },
  actions: {
    submit() {
      let controller = this.get('controller');

      this.store.findRecord('event', this.modelFor('categories.category.activities.activity.events.event').get('id')).then(function(event) {
        event.set('title', controller.get('title'));
        event.set('location', controller.get('location'));
        event.set('description', controller.get('description'));
        event.set('start', new Date(controller.get('start')));
        event.set('end', new Date(controller.get('end')));
        event.save().then(function() {
          Ember.$("#viewButton").click();
        })['catch'](function(error) {
          console.error(error);
        });
      });
    },
    deleteEvent() {

    },
    joinEvent() {
      var id = this.modelFor('categories.category.activities.activity.events.event').get('id');
      Ember.$.ajax({
        url: config.apiHost + '/users/56bd40de14529cd21e26cc27/events',
        method: 'POST',
        data: {id: id}
      }).then(function() {
        window.location.reload(true);
      });
    },
    leaveEvent() {
      var id = this.modelFor('categories.category.activities.activity.events.event').get('id');
      Ember.$.ajax({
        url: config.apiHost + '/users/56bd40de14529cd21e26cc27/events',
        method: 'DELETE',
        data: {id: id}
      }).then(function() {
        window.location.reload(true);
      });
    }
  }
});
