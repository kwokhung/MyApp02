define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dijit/registry"
], function (declare, lang, on, registry) {
    return declare("app.widget._Clickable", null, {
        linkToUrlOnClick: function (url) {
            on(this, "click", lang.hitch(this, function (e) {
                if (e != null) {
                    e.preventDefault();
                }

                var newWindow = window.open(url, "_blank", "location=yes");
                newWindow.addEventListener("loadstart", function (e) {
                    alert(e.type + ' / ' + e.url + ' / ' + e.message);
                });
                newWindow.addEventListener("loadstop", function (e) {
                    alert(e.type + ' / ' + e.url + ' / ' + e.message);
                });
                newWindow.addEventListener("loaderror", function (e) {
                    alert(e.type + ' / ' + e.url + ' / ' + e.message);
                });
                newWindow.addEventListener("exit", function (e) {
                    alert(e.type + ' / ' + e.url + ' / ' + e.message);
                    delete newWindow;
                });
            }));
        },
        switchToViewOnClick: function (viewId) {
            on(this, "click", lang.hitch(this, function (e) {
                if (e != null) {
                    e.preventDefault();
                }

                registry.byId(viewId).show();
            }));
        },
        switchToViewOnClickAsUsual: function (viewId) {
            on(this, "click", lang.hitch(this, function (e) {
                registry.byId(viewId).show();
            }));
        }
    });
});
