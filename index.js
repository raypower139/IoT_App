var Blynk = require("blynk-library");

var sense = require("node-sense-hat");
var imu = sense.Imu;
var IMU = new imu.IMU();

//const wia = require('wia')('d_sk_Ih8Nl6MltOH3j0KZ4vJZGXoF');
var AUTH = 'cf2e8a56ad754b01a1503f7e3499eb6f';

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);

var spawn = require("child_process").spawn

var red = [255,0,0];
sense.Leds.clear();


// v1 write call back
v1.on('write', function(param) {
     if(param[0]==1){
	 sense.Leds.clear(red)
         var process = spawn('python',["./camera.py",,]


	}else{
	 sense.Leds.clear();
}
});
