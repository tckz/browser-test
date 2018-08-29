'use strict';

var wdio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'safari'
  },
  chromeOptions: {
    args: ['--headless', '--disable-gpu']
  }
};

wdio.remote(options).init()
  .windowHandleSize({width:1280, height:800})
  .url('https://www.google.com')
  .getTitle().then(title => {
    console.log('Title: ' + title);
  })
  .saveScreenshot('screenShots/ss.png')
  .end()
  .catch(err =>  {
    console.log(err);
  });

