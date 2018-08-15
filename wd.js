"use strict";

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
	chromeOptions: {
		args: ['--headless', '--disable-gpu']
	}
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
	.saveScreenshot("ss.png")
    .end()
    .catch(function(err) {
        console.log(err);
    });
