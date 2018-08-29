const wdio = require('webdriverio');

const options = {
  port: 4723,
  desiredCapabilities: {
    platformName: 'iOS',
    deviceName: 'iPhone X',
    browserName: 'Safari',
    udid: '<udid>',
    automationName: 'XCUITest',
    //xcodeOrgId: 'xxxxxxx',
    startIWDP: true,
  },
};

wdio.remote(options).init()
  .url('https://www.google.co.jp')
  .getTitle().then(title => {
    console.log('Title : ' + title);
  })
  .end()
  .catch(err => {
    console.log(err);
  });
