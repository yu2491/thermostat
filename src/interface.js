$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  $('#temperature-up').click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decrease();
    updateTemperature();
  });

  $("#temperature-reset").click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSavingOn();
    $('#power-saving-status').text('ON')
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSavingOff();
    $('#power-saving-status').text('OFF')
    thermostat.reset();
    updateTemperature();
  });


  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#typed-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url  = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#select-temperature').text(data.main.temp);
      $('#city-name').text(data.name);
    });
  }


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }

});
