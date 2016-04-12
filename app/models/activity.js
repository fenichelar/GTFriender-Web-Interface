import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.belongsTo('category'),
  events: DS.hasMany('events', { async: true })
});
