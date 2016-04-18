import Ember from 'ember';

export default Ember.Controller.extend({
  title: null,
  location: null,
  start: null,
  end: null,

  actions: {
    showEdit: function() {
      var model = this.get('model');
      var start = new Date(model.get('start'));
      var startString = start.getFullYear() + "-" + ("0"+(start.getMonth()+1)).slice(-2) + "-" + ("0"+start.getDate()).slice(-2) + " " + ("0" + start.getHours()).slice(-2) + ":" + ("0" + start.getMinutes()).slice(-2);
      var end = new Date(model.get('end'));
      var endString = end.getFullYear() + "-" + ("0"+(end.getMonth()+1)).slice(-2) + "-" + ("0"+end.getDate()).slice(-2) + " " + ("0" + end.getHours()).slice(-2) + ":" + ("0" + start.getMinutes()).slice(-2);

      this.set('title', model.get('title'));
      this.set('location', model.get('location'));
      this.set('start', startString);
      this.set('end', endString);
    }
  }
});
