import time
from wia import Wia
from sense_hat import SenseHat
sense = SenseHat()


wia = Wia()
wia.access_token = "d_sk_t0tGXNU1iCWyY5gYrKCWlzHU"

while True:
    temp=round(sense.get_temperature(),2)
    wia.Event.publish(name="temperature", data=temp)
    hum=round(sense.get_humidity(),2)
    wia.Event.publish(name="humidity", data=hum)
    time.sleep(15)
