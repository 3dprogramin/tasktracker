Task tracker
--------

A simple task time tracker build in nodejs


### Installation
```npm install @3dprogramin/tasktracker```

or

```git clone https://github.com/3dprogramin/tasktracker```


### Usage
```js
const tasktracker = require('@3dprogramin/tasktracker');
```
#### Restart time
```js
tasktracker.restart().then(function(data){
        send_os_notif('Time restarted');
    }).catch(function(err){
       send_os_notif(format('Error: {}', err.message));
    });
```
#### Get passed time
```js
tasktracker.passed_time().then(function(passed_time){
        send_os_notif(format('Started to track {}', passed_time));
    }).catch(function(err){
        send_os_notif(format('Error: {}', err.message));
    });
```

The **send_os_notif** method executes a OS command, that prints an alert on
the screen. Method can be found inside example

### Example
The example contains an out-of-the-box working program (if you're on ArchLinux with OpenBox)
If you're not, make sure you have ```notify-send``` installed

Once you have that working, you can set a hotkey to make it even easier, I've used ```obkey``` to do that

Currently, it accepts two arguments: ```restart``` and ```show```

-----------

**Usage**

> Restart time tracker

```node example/index.js restart```

> Show passed time

```node example/index.js restart```

### License
MIT
