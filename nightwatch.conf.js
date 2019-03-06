const path = require('path');

const conf = {
    "src_folders" : ["tests/specs"],

    "webdriver": {
        "start_process": true,
        "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
        "cli_args": [
            "--verbose"
        ],
        "port": 9515
    },

    "test_settings" : {
        "default" : {
            "filter" : "*.js",
            "desiredCapabilities" : {
                "browserName" : "chrome"
            }
        }
    }
};

module.exports = (function(settings) {
    settings.test_workers = false;
    return settings;
})(require('./nightwatch.json'));


