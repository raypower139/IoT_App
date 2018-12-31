import logging


logging.basicConfig(filename='presence-detector.log',level=logging.INFO, format='%(asctime)s - %(message)s')
logging.info('Starting presencenan detector')

from sense_hat import SenseHat

sense = SenseHat()

from time import sleep

#!/usr/bin/env python
#coding=utf-8

import subprocess

#Names of device owners
names = ["Ray's Laptop", "Ray's Phone"]
#Mac addresses of devices
macs = ["98:54:1b:0a:32:a5", "1c:23:2c:77:f1:dd"]

def arp_scan():
     try:
          output = subprocess.check_output("sudo arp-scan -l", shell=True)
          for i in range(len(names)):
                result = names[i]
                if macs[i] in output:
                        result=result+" is home"
                else:
                        result=result+" is not home"
			
                print(result)
                sense.show_message(result)
     except Exception as e:
         logging.error(e)


while True:
    arp_scan()
    sleep(60)
