const EventType = require('./eventtype');
const patternPolicies = require('./policies');
const { temporalOrdering, recurrence } = require('./reactive-libs/common/context');
const { hemisphere, Point } = require('./location');
const createRxAdapter = require('./reactive-libs/rxjs/adapter');
const createMostAdapter = require('./reactive-libs/most/adapter');

module.exports = function createCepjsOperators(reactiveLib) {
  let library = {
    EventType,
    patternPolicies,
    temporalOrdering,
    recurrence,
    Point,
    hemisphere
  };

  if (reactiveLib.type === 'rx') {
    return Object.assign(library, createRxAdapter(reactiveLib));
  } else if (reactiveLib.type === 'most') {
    return Object.assign(library, createMostAdapter(reactiveLib));
  } else {
    return library;
  }
};