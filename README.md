Task tracker
--------

Track the time it takes you to complete a task


### Installation
```npm install task-tracker```

or

```git clone https://github.com/3dprogramin/task-tracker```


### Usage
```js
const tasktracker = require('task-tracker');
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
The example contains a working program out-of-the-box if you're on ArchLinux with OpenBox.
If you're not, only thing you have to get going is the ```notify-send``` program.

Once you have that working, you can set a hotkey to make it even easier, I've used ```obkey``` to do that

-----------

**Usage**

> Restart time tracker

```node example/index.js restart```

> Show passed time

```node example/index.js restart```

### License
MIT
