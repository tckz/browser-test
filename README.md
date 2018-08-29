Browser test
===

Automated test for browsers.

# Requirements

* Node.js 8.x
* Yarn

## Prerequisites

* Install node_modules
  ```bash
  $ yarn
  ```
* Install dependencies of selenium-standalone.
  ```bash
  $ npx selenium-standalone install
  ```

* Check environment for Appium.
  ```bash
  $ npx appium-doctor
  ```

* For Appium+iOS on macOS.
  ```bash
  $ brew install ios-webkit-debug-proxy
  $ brew install libimobiledevice --HEAD
  $ brew install ios-deploy
  ```
  * Enable web inspector of mobile safari on iOS.
    ```
    Settings > Safari > Detail > Web Inspector
    ```
   

# webpack / Babel / ESLint

* Make bundle with eslint
  ```bash
  $ npx webpack
  ```
  
* Make bundle with eslint/uglify.
  ```bash
  $ npx webpack --mode production
  ```

# Automated test with WebdriverIO

## Run UI test with mocha using selenium-standalone and remote X server.

```bash
$ env DISPLAY=10.8.170.1:0.0 npx wdio wdio.conf.js
```
* Browser which is specified in wdio.conf.js must be installed.
  ```javascript
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  }]
  ```

## Run UI test with mocha using Appium+iOS Mobile Safari.

* Execute on macOS.
  ```bash
  $ npx wdio wdio.conf-appium-ios-safari.js
  ```
* UDID should be specified.
  ``` 
    capabilities: [{
      maxInstances: 1,
      automationName: 'XCUITest',
      browserName: 'safari',
      deviceName: 'iPhone X',
      platformName: 'iOS',
      platformVersion: "11.2",
      udid: '04444444-7777-4444-BBBB-333333333333',
      startIWDP: true,
    }],
  ```


# Automation with WebdriverIO

## Run UI control using WebdriverIO.

1. Launch selenium-standalone with remote X server before run automated UI control.
   ```bash
   $ env DISPLAY=10.8.170.1:0.0 npx selenium-standalone start
   ```
1. Run UI control with WebdriverIO.
   ```bash
   $ node wdio.js
   ```


## Run UI control using WebdriverIO/Appium

1. Launch Appium server before run automated UI control.
   ```bash
   $ npx appium
   ```
1. Run UI control.
   ```bash
   $ node wdio-appium-ios-safari.js
   ```


