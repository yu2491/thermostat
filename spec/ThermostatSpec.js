'use  strict'

describe('Thermostat:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat =  new Thermostat();
  });

  it('is initially set to 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
});
