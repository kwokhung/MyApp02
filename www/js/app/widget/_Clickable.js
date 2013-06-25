define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dijit/registry"
], function (declare, lang, on, registry) {
    return declare("app.widget._Clickable", null, {
        switchToViewOnClick: function (viewId) {
            on(this, "click", lang.hitch(this, function (e) {
                if (e != null) {
                    e.preventDefault();
                }

                registry.byId(viewId).show();
            }));
        }
    });
});
