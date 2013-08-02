define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/on",
    "dojo/string",
    "dojo/store/Memory",
    "dojo/store/Observable",
    "dojox/mobile/RoundRectStoreList",
    "dijit/registry",
    "app/util/app"
], function (declare, lang, array, on, string, Memory, Observable, RoundRectStoreList, registry, app) {
    return declare("app.widget.special.home.ListPressRelease", [RoundRectStoreList], {
        resourceUrl: null,
        storeLabel: "Press Release",
        storeIdentifier: "id",
        postCreate: function () {
            this.inherited(arguments);

            if (this.resourceUrl != null) {
                var itemData = [];
                var itemStore = new Observable(new Memory({
                    data: {
                        "label": this.storeLabel,
                        "identifier": this.storeIdentifier,
                        "items": itemData
                    }
                }));

                this.itemMap = { "headline": "label", "date": "rightText" };
                this.setStore(itemStore);

                app.serviceHelper.requestGetTextServiceNoBlock(
                    string.substitute("${resourceUrl}&languageDisplay=${languageDisplay}", {
                        resourceUrl: this.resourceUrl,
                        languageDisplay: app.language
                    }),
	                null,
	                lang.hitch(this, function (response) {
	                    array.forEach(itemStore.query({}), function (item, index) {
	                        itemStore.remove(item.id);
	                    });
	                    array.forEach(response.content.data, lang.hitch(this, function (item, index) {
	                        item.id = this.id + "_" + item.id;
	                        item.variableHeight = true;
	                        itemStore.put(item);

	                        on(registry.byId(this.id + "_" + item.id), "click", lang.hitch(this, function (e) {
	                            if (e != null) {
	                                e.preventDefault();
	                            }

	                            alert("Here");
	                        }));
	                    }));
	                })
                );
            }
        }
    });
});
