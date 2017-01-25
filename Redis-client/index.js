/*client*/
var http = require('http');
var fs = require('fs');
var redis = require("redis");
var sub = redis.createClient(), pub = redis.createClient();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

sub.on("message", function (channel, message) {
	console.log('message reçu');
    pub.publish("chat", message);
});

sub.subscribe("server");