from picamera import PiCamera
from time import sleep
from gpiozero import Button

button = Button(17)
camera = PiCamera()

camera.start_preview()
sleep(5)
camera.capture('/home/pi/image3.jpg')
camera.stop_preview()
