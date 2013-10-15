#!/bin/sh


kill -9 `cat node.pid`
echo "pid `cat node.pid` is killed"
rm -f node.pid
