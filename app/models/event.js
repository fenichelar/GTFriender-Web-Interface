import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  allDay: DS.attr('boolean'),
  activity: DS.belongsTo('activity')
});
