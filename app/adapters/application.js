import DS from 'ember-data';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

const { String: { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend({
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
