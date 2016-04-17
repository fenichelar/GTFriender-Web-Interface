import Ember from 'ember';

export default Ember.Controller.extend({
  newCategoryName: '',
  disabled: Ember.computed('newCategoryName', function() {
    return Ember.isEmpty(this.get('newCategoryName'));
  })
});
