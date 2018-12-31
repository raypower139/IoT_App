from picamera import PiCamera
from time import sleep
from datetime import datetime

camera = PiCamera()
date = datetime.now().strftime("%Y%m%d-%H%M%S")

camera.start_preview()
camera.start_recording('/home/pi/camera/video/video-'+ date +'.h264')
sleep(20)
camera.stop_recording()
camera.stop_preview()
