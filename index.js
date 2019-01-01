var Blynk = require("blynk-library");
var Gpio = require('onoff').Gpio
var sense = require("node-sense-hat");
var imu = sense.Imu;
var IMU = new imu.IMU();

var AUTH = 'cf2e8a56ad754b01a1503f7e3499eb6f';

var blynk = new Blynk.Blynk(AUTH);

// Needed to start the camera.py program
var process = require('child_process')

// Virtual Pins
var v0 = new blynk.VirtualPin(0);
var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v3 = new blynk.VirtualPin(3);
var v4 = new blynk.VirtualPin(4);
var v5 = new blynk.VirtualPin(5);
var v6 = new blynk.VirtualPin(6);

// colours for the LEDS to simulate turning on the heaters
var table_one = [0, 255,0];
sense.Leds.clear();

var table_two = [255,0,0];
var tables = [0,0,255];

sense.Leds.clear();


// v0 write call back - Simulates turing the heaters on table One
v0.on('write', function(param) {
     if(param[0]==1){
	sense.Leds.clear(table_one);

        }else{
         sense.Leds.clear();

}
});

// v1 write call back - This simulated turning the heater on on table two
v1.on('write', function(param) {
     if(param[0]==1){
        sense.Leds.clear(table_two);
       } else{
         sense.Leds.clear();

}
});


// v2 read call back - This will display the temperature from the sensehat
v2.on('read', function() {
  IMU.getValue(function (e, data) {
     v2.write(data.temperature);
  })
});

// v3 read call back - This will display the humidity from the sensehat
v3.on('read', function() {
  IMU.getValue(function (e, data) {
     v3.write(data.humidity);
  })
});


// v4 write call back - This will take a still photo
v4.on('write', function(param) {
     if(param == 1){
        process.exec('python3 camerastill.py', function (err, stdout, stderr){
	  if (err) {
		console.log("\n" + stderr);
	} else {
		console.log(stdout);
	}
	})
}
});

// v5 write call back - This will start the camera record program
v5.on('write', function(param) {
     if(param == 1){
        process.exec('python3 cameravideo.py', function (err, stdout, stderr){
	  if (err) {
		console.log("\n" + stderr);
	} else {
		console.log(stdout);
	}
	})
}
});


// v6 write call back - This starts the camera stream
v6.on('write', function(param) {
     if(param[0] == 1){
        process.exec('python3 camera.py', function (err, stdout, stderr){
          if (err) {
                console.log("\n" + stderr);
        } else {
                console.log(stdout);
        }
        })
}
});
