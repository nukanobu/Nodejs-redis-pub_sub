#!/bin/sh

NODE_ENV=production  /usr/local/node/v0.8.21/bin/node ./server.js >node.log 2>&1 &
pid=$!

echo $pid > node.pid
sleep 5
echo ps
ps -ef |grep $pid
echo netstat
netstat -anp |grep node

