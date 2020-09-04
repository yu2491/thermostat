'use strict'

class Thermostat {



  constructor(){
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.powersaving = true;
    this.MEDIUM_USAGE_MIN = 18;
    this.MEDIUM_USAGE_MAX = 25;
  }

  getTemperature(){
    return this.temperature;
  }

  increase(){
    if(this.isMaximumTemperature()){
     return;
    }
    this.temperature++;
  }

  decrease(){
    if(this.isMinimumTemperature()){
      return;
    }
    this.temperature--;
  }

  isMinimumTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature(){
    if(this.isPowerSavingOn() === false) {
      return this.temperature  === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  isPowerSavingOn(){
    return this.powersaving === true;
  }

  switchPowerSavingOff(){
    this.powersaving =  false;
  }

  switchPowerSavingOn(){
    this.powersaving =  true;
  }

  reset(){
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  usage(){
    if(this.temperature < this.MEDIUM_USAGE_MIN) {
      return "low-usage"
    } else if (this.temperature <= this.MEDIUM_USAGE_MAX) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  }


}
