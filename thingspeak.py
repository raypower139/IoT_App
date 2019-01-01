import urllib2
import time
import json
from presence import arp_scan


WRITE_API_KEY='GUNTE965ZJ78YRDJ'
baseURL='https://api.thingspeak.com/update?api_key=%s' % WRITE_API_KEY
result = arp_scan(result)

#!/usr/bin/env python
#coding=utf-8
def writeData(result):
        conn = urllib2.urlopen(baseURL + 'field1=%s' & (result))
        print(conn.read())
        conn.close()

while True:
	writeData(result)

