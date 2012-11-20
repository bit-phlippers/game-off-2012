#!/bin/bash

# uses thin webserver to serve files:
# http://code.macournoyer.com/thin/usage/
# you *must* have ruby installed to use this...

thin -V -A file start
