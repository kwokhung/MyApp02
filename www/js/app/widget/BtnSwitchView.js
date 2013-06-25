define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dijit/registry",
    "dojox/mobile/Button",
    "app/util/app"
], function (declare, lang, on, registry, Button, app) {
    return declare("app.widget.BtnSwitchView", [Button], {
        toView: null,
        postCreate: function () {
            this.inherited(arguments);

            on(this, "click", lang.hitch(this, function (e) {
                if (e != null) {
                    e.preventDefault();
                }

                registry.byId(this.toView).show();
            }));
        }
    });
});
