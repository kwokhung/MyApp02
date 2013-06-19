var main = function () {
    require([
        "dojo/ready",
        "app/util/app"
    ], function (ready, app) {
        ready(function () {
            if (typeof cordova != "undefined") {
                cordova.exec(function (echoValue) {
                    alert(echoValue);
                }, function (error) {
                    alert(error);
                }, "Plugin01", "echo", ["Hello"]);
            }

            if (typeof device != "undefined") {
                app.device = device;
            }

            if (typeof navigator != "undefined") {
                app.navigator = navigator;
            }

            require([
                "dojox/mobile/compat",
                "dojox/mobile/deviceTheme",
                "dojox/dgauges/components/default/CircularLinearGauge",
                "dojox/dgauges/components/default/HorizontalLinearGauge",
                "dojox/dgauges/components/classic/CircularLinearGauge",
                "dojox/dgauges/components/classic/HorizontalLinearGauge",
                "app/widget/special/layout/PnlMain"
            ]);

            ready(function () {
                require([
                    "dojox/mobile/parser",
                    "dojo/domReady!"
                ], function (parser) {
                    parser.parse();
                });
            });
        });
    })
};