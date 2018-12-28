var Blynk = require("blynk-library");
var Gpio = require('onoff').Gpio
var sense = require("node-sense-hat");
var imu = sense.Imu;
var IMU = new imu.IMU();

var AUTH = 'cf2e8a56ad754b01a1503f7e3499eb6f';

var blynk = new Blynk.Blynk(AUTH);


var process = require('child_process')


var v0 = new blynk.VirtualPin(0);
var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v3 = new blynk.VirtualPin(3);
var v4 = new blynk.VirtualPin(4);


var table_one = [0, 255,0];
sense.Leds.clear();

var table_two = [255,0,0];
var tables = [0,0,255];

sense.Leds.clear();


// v0 write call back
v0.on('write', function(param) {
     if(param[0]==1){
	sense.Leds.clear(table_one);

        }else{
         sense.Leds.clear();

}
});

// v1 write call back
v1.on('write', function(param) {
     if(param[0]==1){
        sense.Leds.clear(table_two);

        }else{
         sense.Leds.clear();

}
});





v2.on('read', function() {
  IMU.getValue(function (e, data) {
     v2.write(data.temperature);
  })
});

v3.on('read', function() {
  IMU.getValue(function (e, data) {
     v3.write(data.humidity);
  })
});


// v4 write call back
v4.on('write', function(param) {
     if(param == 1){
        process.exec('python cameratest.py', function (err, stdout, stderr){
	  if (err) {
		console.log("\n" + stderr);
	} else {
		console.log(stdout);
	}
	})
}
});



