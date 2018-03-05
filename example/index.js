#!/usr/bin/node

const tasktracker = require('../lib/index');
const exec = require('child_process').exec;
const format = require('string-format');

/**
 * Send OS notification
 * @param title - string
 * @param msg - string
 */
function send_os_notif(msg) {
    // arch-openbox notification style
    exec(format('notify-send "Task tracker" "{}"', msg), function (err, stdout, stderr) {
        if (err) {
            console.log('Error on notification: ', err);
        }
    });
}

// print process.argv
var args = process.argv;
var last_arg = args[args.length - 1].toLowerCase().trim();

if (last_arg === 'restart') {
    tasktracker.restart().then(function(data){
        send_os_notif('Time restarted');
    }).catch(function(err){
       send_os_notif(format('Error: {}', err.message));
    });
}
else if(last_arg === 'show'){
    // show
    tasktracker.passed_time().then(function(passed_time){
        send_os_notif(format('Started to track {}', passed_time));
    }).catch(function(err){
        send_os_notif(format('Error: {}', err.message));
    });
}
else {
    send_os_notif('Invalid argument, valid arguments: restart, show')
}
