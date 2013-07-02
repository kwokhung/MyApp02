define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/string",
    "dojo/store/Memory",
    "dojo/store/Observable",
    "dojox/mobile/RoundRectStoreList",
    "app/util/app"
], function (declare, array, string, Memory, Observable, RoundRectStoreList, app) {
    return declare("app.widget.special.home.ListPressRelease", [RoundRectStoreList], {
        resourceUrl: null,
        storeLabel: "Settings",
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
	                function (response) {
	                    array.forEach(itemStore.query({}), function (item, index) {
	                        itemStore.remove(item.id);
	                    });
	                    array.forEach(response.content.data, function (item, index) {
	                        itemStore.put(item);
	                    });
	                }
                );
            }
        }
    });
});
