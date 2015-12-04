var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.argos.co.uk')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
	.saveScreenshot('homepagescreen.png')
	.saveScreenshot('wholepage.png');
    //.end();