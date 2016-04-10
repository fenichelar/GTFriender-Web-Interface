import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.apiHost,
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
