var profile = {
    basePath: "..",
    releaseDir: "../../..",
    releaseName: "MyApp02-Release",
    action: "release",
    selectorEngine: "lite",
    stripConsole: "all",
    copyTests: false,
    cssOptimize: "comments",
    optimize: 'closure',
    layerOptimize: 'closure',
    mini: true,
    webkitMobile: true,
    localeList: "en, zh, zh-cn",
    /*resourceTags: {
        amd: function(filename, mid){
            return /index.html$/.test(filename);
        },
        declarative: function (filename) {
            alert(filename);
            return /\.htm(l)?$/.test(filename);
        }
    },*/
    layers: {
        "dojo/dojo": {
            customBase: true,
            boot: true,
            include: [
                "dojo/on",
                "dojo/ready",
                "dojo/domReady",
                "dojo/dom-construct",
                "dojo/query",
                "dojo/json",
                "dojo/request/xhr",
                "dojo/request/script",
                "dojo/request/iframe",
                "dojo/string",
                "dojo/i18n",
                "dojo/Deferred",
                "dojo/topic",
                "dojo/cookie",
                "dojo/store/Memory",
                "dojo/store/Observable",
                //"dojo/date",
                "dijit/registry",
                //"dijit/form/DataList",
                //"dijit/Dialog",
                "dojox/io/windowName",
                "dojox/mobile",
                //"dojox/mobile/_IconItemPane",
                "dojox/mobile/parser",
                "dojox/mobile/compat",
                "dojox/mobile/deviceTheme",
                "dojox/mobile/ContentPane",
                "dojox/mobile/ScrollablePane",
                "dojox/mobile/View",
                "dojox/mobile/ScrollableView",
                "dojox/mobile/SwapView",
                "dojox/mobile/Heading",
                "dojox/mobile/RoundRect",
                "dojox/mobile/RoundRectCategory",
                "dojox/mobile/RoundRectList",
                "dojox/mobile/ListItem",
                "dojox/mobile/SpinWheel",
                "dojox/mobile/SpinWheelSlot",
                "dojox/mobile/FormLayout",
                "dojox/mobile/TextBox",
                "dojox/mobile/SimpleDialog",
                "dojox/mobile/ProgressIndicator",
                "dojox/mobile/Button",
                "dojox/mobile/TabBar",
                "dojox/mobile/TabBarButton",
                "dojox/mobile/PageIndicator",
                "dojox/mobile/Overlay",
                "dojox/mobile/RoundRectStoreList",
				"dojox/mobile/GridLayout",
				"dojox/mobile/IconContainer",
				"dojox/mobile/IconItem",
				"dojox/mobile/Badge",
				"dojox/mobile/IconMenu",
				"dojox/mobile/IconMenuItem",
				"dojox/mobile/Carousel",
				"dojox/mobile/CarouselItem",
				"dojox/mobile/StoreCarousel",
                "dojox/mobile/FixedSplitter",
                "dojox/mobile/LongListMixin",
                "dojox/mobile/FilteredListMixin",
                "dojox/mobile/Opener",
                "dojox/mobile/Tooltip",
                //"dojox/mobile/ComboBox",
                "dojox/dgauges/components/default/CircularLinearGauge",
                "dojox/dgauges/components/default/HorizontalLinearGauge",
                "dojox/dgauges/components/classic/CircularLinearGauge",
                "dojox/dgauges/components/classic/HorizontalLinearGauge",
                "dojox/gfx/vml",
                "dojox/gfx/svg",
                "dojox/gfx/shape",
                "dojox/gfx/path"
                //"app/index.html"
            ]
        }
    },
    staticHasFeatures: {
        "dojo-trace-api": 0,
        "dojo-log-api": 0,
        "dojo-publish-privates": 0,
        "dojo-sync-loader": 0,
        "dojo-test-sniff": 0,
        webkit: true
    },
    packages: [
        {
            name: "dojo",
            location: "D:/dojo/dojo-release-1.9.1-src/dojo"
        },
        {
            name: "dijit",
            location: "D:/dojo/dojo-release-1.9.1-src/dijit"
        },
        {
            name: "dojox",
            location: "D:/dojo/dojo-release-1.9.1-src/dojox"
        }/*,
        {
            name: "app",
            location: "."
        }*/
    ]
};
