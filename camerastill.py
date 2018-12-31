from picamera import PiCamera
from time import sleep
from datetime import datetime

camera = PiCamera()
date = datetime.now().strftime("%Y%m%d-%H%M%S")

camera.start_preview()
sleep(5)
camera.capture('/home/pi/camera/images/image '+ date +'.jpg')
camera.stop_preview()
