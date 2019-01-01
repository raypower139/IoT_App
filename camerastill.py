from picamera import PiCamera
from time import sleep
from datetime import datetime

camera = PiCamera()
date = datetime.now().strftime("%Y%m%d-%H%M%S")

# Start the camera and preview it on screen
camera.start_preview()
# Sleep for 5 sec to allow camera to focus
sleep(5)
# Capture the still image and append date and time
camera.capture('/home/pi/camera/images/image '+ date +'.jpg')
# Stop the camera and preview
camera.stop_preview()
