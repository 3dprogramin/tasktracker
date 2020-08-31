const fs = require('fs');
const path = require('path');

const Q = require('q');
const format = require('string-format');

var jta = require('javascript-time-ago');
var jtaen = require('javascript-time-ago/locale/en');

var config_file = undefined;        // we need a config file (which we set below)

// set config file
set_config_file();

// set locale
jta.locale(jtaen);


/**
 * Calculate time since date
 * @param d
 * @returns {string} - time since of date
 */
function time_since_date (d) {
    var j = new jta('en-US');
    return j.format(d).trim();
};

/**
 * Get user home config directory
 * @returns {*}
 */
function set_config_file() {
    config_file = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'],
        '.config', 'time-tracker.time');
}


/**
 * Restart time (writes current time to time_file)
 */
exports.restart = function(){
    var q = Q.defer();
    fs.writeFile(config_file, new Date(Date.now()).toString(), function(err) {
        if (err) return q.reject(new Error(format('cannot write to time file, details: {}', err)));
        return q.resolve({'status': 'new date written to file'});
    });
    return q.promise;
};

/**
 * Gets the passed time since start/restart
 */
exports.passed_time = function(){
    var q = Q.defer();
    fs.readFile(config_file, 'utf-8', function(err, last_time) {
        if (err) return q.reject(new Error(format('cannot read time file, details: {}', err)));
        // now that we have time last_time
        // make difference in a `pretty` way
        var pretty_diff = time_since_date(new Date(last_time));
        return q.resolve(pretty_diff);
    });
    return q.promise;
};
