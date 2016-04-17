import Ember from 'ember';

export default Ember.Controller.extend({
  newActivityName: '',
  disabled: Ember.computed('newActivityName', function() {
    return Ember.isEmpty(this.get('newActivityName'));
  })
});
