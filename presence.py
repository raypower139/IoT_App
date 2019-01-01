# This file will scan the wifi connection for connected devices, 
# match against a predefined array of names/mac addresses and print out and send info to thingspeak
import urllib2
import json
import logging
from time import sleep
from sense_hat import SenseHat

# Log results
logging.basicConfig(filename='presence-detector.log',level=logging.INFO, format='%(asctime)s - %(message)s')
logging.info('Starting presencenan detector')

sense = SenseHat()

import subprocess

#Names of device owners
names = ["Joe Bloggs", "Joe Soap"]
#Mac addresses of devices
macs = ["98:54:1b:0a:32:a5", "1c:23:2c:77:f1:dd"]

def arp_scan():
     try:
          # Scan the connection
          output = subprocess.check_output("sudo arp-scan -l", shell=True)
          # Go through array and try match them with connected devices
          for i in range(len(names)):
                result = names[i]
                if macs[i] in output:
                        result=result+" is in the club"
                        # If someone is connected the push this info to Thingspeak
			conn = urllib2.urlopen('https://api.thingspeak.com/update?api_key=GUNTE965ZJ78YRDJ&field1=' + result)
                else:
                        result=result+" is not in the club"
                print(result)
                # Print out on the sensehat
		sense.show_message(result)
     except Exception as e:
         logging.error(e)

while True:
    arp_scan()
    sleep(5)

