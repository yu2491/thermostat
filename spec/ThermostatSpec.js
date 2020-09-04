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

  it('has a  default of powersaving being on', function() {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('powersaving can be turned off', function() {
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('powersaving can be turned on', function() {
    thermostat.switchPowerSavingOff();
    thermostat.switchPowerSavingOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('has a max temp of 25 if power saving mode on', function() {
    for(var  i=0; i<6; i++)  {
      thermostat.increase();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('has a max temp of 32 if power saving mode off', function() {
    thermostat.switchPowerSavingOff();
    for(var  i=0; i<13; i++)  {
      thermostat.increase();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('reset temp to 20', function() {
    for(var  i=0; i<6; i++)  {
      thermostat.increase();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('usage levels', function() {
    it('return low-usage', function() {
      for(var  i=0; i<4; i++)  {
        thermostat.decrease();
      }
      expect(thermostat.usage()).toEqual('low-usage')
    });

    it('return medium-usage', function() {
      expect(thermostat.usage()).toEqual('medium-usage')
    });

    it('return high-usage', function() {
      thermostat.powersaving = false
      for(var i=0; i<7; i++)  {
        thermostat.increase();
      }
      expect(thermostat.usage()).toEqual('high-usage')
    });
  });



});
