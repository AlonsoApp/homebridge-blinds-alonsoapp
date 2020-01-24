# homebridge-blinds
[![GitHub issues](https://img.shields.io/github/issues/AlonsoApp/homebridge-blinds-alonsoapp.svg)](https://github.com/WAlonsoApp/homebridge-blinds-alonsoapp/issues)
[![license](https://img.shields.io/github/license/AlonsoApp/homebridge-blinds-alonsoapp.svg)](https://github.com/AlonsoApp/homebridge-blinds-alonsoapp/blob/master/LICENCE)

My room's blind plugin for [HomeBridge](https://github.com/nfarina/homebridge)

Plugin for Homebridge which controls my two bedroom's blinds. Each blind is controlled by an analog remote controller with two simple buttons on it (one for moving up and another for moving down).
\#TODO explain how I hooked up the controller's buttons to the raspberry pi


## Installation

1. Install homebridge using: `npm install -g homebridge`
2. Install this plugin using: `npm install -g homebridge-blinds-alonsoapp`
3. Update your configuration file. See snippet below.

## Configuration
You'll need to add a `Regex` accessory to your homebridge config.json. This example below would check the apple store page every 5 minutes and opens the contact sensor if it's closed.

```JSON
{
  "accessories": [
    {
      "accessory": "Blind",
      "name": "Blind West"
    }
  ]
}
```

### Value summary
`accessory`: The name of the accessory, this must be `Blind`.  
`name`: The name of the contact sensor in HomeKit.  

**Note:** This is a personal project and, although the code is well documented and easy to modify, this plugin will only work on my home blind setup. However, I encourage you to fork it and modify it so it can work on your home's blind configuration.
