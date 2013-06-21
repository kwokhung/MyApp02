define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/string",
    "dijit/registry",
    "dojox/mobile/ContentPane",
    "app/util/app"
], function (declare, lang, on, string, registry, ContentPane, app) {
    return declare("app.widget.special.layout.PnlMain", [ContentPane], {
        postCreate: function () {
            this.inherited(arguments);

            on(this, "load", lang.hitch(this, function (e) {
                if (e != null) {
                    e.preventDefault();
                }

                on(document, "menubutton", function () {
                    app.generalHelper.alert("About", "This is My Application 01.");
                    registry.byId("viewPhoneInformation").show();
                });
            }));
        }
    });
});
