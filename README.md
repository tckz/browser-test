Browser test
===

# Requirements

* Node.js 8.x

## Prerequisites

* Install node_modules
  ```bash
  $ npm install
  ```
* Install dependencies of selenium-standalone.
  ```bash
  $ npx selenium-standalone install
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

# WebdriverIO

### Run UI test with mocha using selenium-standalone and remote X server.

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
  }],
  ```

### Run UI control using WebdriverIO.

1. Run selenium-standalone with remote X server.
   ```bash
   $ env DISPLAY=10.8.170.1:0.0 npx selenium-standalone start
   ```
1. Run UI control with WebdriverIO.
   ```bash
   $ node wd.js
   ```


