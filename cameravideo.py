from picamera import PiCamera
from time import sleep
from datetime import datetime

camera = PiCamera()
date = datetime.now().strftime("%Y%m%d-%H%M%S")

# Start the camera and show preview on screen
camera.start_preview()
# Start recording and apend date and time
camera.start_recording('/home/pi/camera/video/video-'+ date +'.h264')
# Take a 20 second clip
sleep(20)
# Stop recording and preview
camera.stop_recording()
camera.stop_preview()


