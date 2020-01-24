const Service, Characteristic;

module.exports = function (homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("switch-plugin", "MyAwesomeSwitch", mySwitch);
};

mySwitch.prototype = {
  // Devolvemos la info del service y el service
  getServices: function() {
    let informationService = new Service.AccessoryInformation();
    informationService
      .setCharacteristic(Characteristic.Manufacturer, "My switch manufacturer")
      .setCharacteristic(Characteristic.Model, "My switch model")
      .setCharacteristic(Characteristic.SerialNumber, "123-456-789");

    // El service es de tipo switch y la unica característica que tiene e si
    // esta On o no. Asi que declaramos el set y el get de esa propiedad y luego
    // más adelante implementamos la lógica
    let switchService = new Service.Switch("My switch");
    switchService
      .getCharacteristic(Characteristic.On)
        .on('get', this.getSwitchOnCharacteristic.bind(this))
        .on('set', this.setSwitchOnCharacteristic.bind(this));

    this.informationService = informationService;
    this.switchService = switchService;
    return [informationService, switchService];
  }
}

// Esto es porque la función get y set del ejemplo implica llamadas a una api 
// REST que ponen a On o a off el switch y devuelven el estado del mismo

const request = require('request');
const url = require('url');

// inicializamos el accesory con la config que pongamos en el config.json
function mySwitch(log, config) {
  this.log = log;
  this.getUrl = url.parse(config['getUrl']);
  this.postUrl = url.parse(config['postUrl']);
}

//--- hasta aqui creo que no haría afalta si no hay llamadas a API REST

mySwitch.prototype = {

  getSwitchOnCharacteristic: function (next) {
    const currentState = true;
    // null es el error creo
    return next(null, currentState);
  },

  setSwitchOnCharacteristic: function (on, next) {
    // TODO poner a on
    // next(error) si ha habido un error
    return next();
  }
}
