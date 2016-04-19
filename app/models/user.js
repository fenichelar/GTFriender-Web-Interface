import DS from 'ember-data';

export default DS.Model.extend({
  auth: DS.belongsTo('auth', { async: true }),
  events: DS.hasMany('event', { async: true })
});
