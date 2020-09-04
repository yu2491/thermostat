'use  strict'

describe('Thermostat:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat =  new Thermostat();
  });

  it('is initially set to 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase temperateure with increase function', function(){
    thermostat.increase();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('can decrease temperateure with decrease function', function(){
    thermostat.decrease();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for(var i=0; i<11; i++) {
      thermostat.decrease();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('reset temp to 20', function() {
    for(var  i=0; i<6; i++)  {
      thermostat.increase();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('Power Saving Mode', function() {
    it('has a  default of powersaving being on', function() {
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

    it('powersaving can be turned off', function() {
      thermostat.switchPowerSavingOff();
      expect(thermostat.isPowerSavingOn()).toBe(false);
    });

    it('powersaving can be turned back on', function() {
      thermostat.switchPowerSavingOff();
      expect(thermostat.isPowerSavingOn()).toBe(false);
      thermostat.switchPowerSavingOn();
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });
  });

  describe('Power saving mode ON', function(){
    it('has a max temp of 25', function() {
      for(var  i=0; i<6; i++)  {
        thermostat.increase();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('Power saving mode OFF', function(){
    it('has a max temp of 32', function() {
      thermostat.switchPowerSavingOff();
      for(var  i=0; i<13; i++)  {
        thermostat.increase();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('Usage levels', function() {
    it('return low-usage when temperature is below 18 degrees', function() {
      for(var  i=0; i<4; i++)  {
        thermostat.decrease();
      }
      expect(thermostat.usage()).toEqual('low-usage')
    });

    it('return medium-usage when temperature is between 18 and 25', function() {
      expect(thermostat.usage()).toEqual('medium-usage')
    });

    it('return high-usage', function() {
      thermostat.powerSavingMode = false
      for(var i=0; i<7; i++)  {
        thermostat.increase();
      }
      expect(thermostat.usage()).toEqual('high-usage')
    });
  });
});
