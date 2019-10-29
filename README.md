# JavaScript Protractor

## Description
To write some sample tests using Protractor

## Learning Notes
 - configuration file (conf.js) is used to set the parameters of the test
 - the conf file outlines tests locations, browser parameters
 - Angular tests can run against both angular and non angular sites
 
## Instructions
In order to run Protractor tests, you will first need to run a local instance of WebDriver.
You can do this by running the following in a terminal:
```
webdriver-manager start
```
Once you have webdriver running locally, run the following from the root directory of this project:
```
protractor conf.js
```
## Pre-requisites
 - You will need to have node.js installed
 - You will need to install protractor