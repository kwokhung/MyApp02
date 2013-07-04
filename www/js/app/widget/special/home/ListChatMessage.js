define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/string",
    "dojo/store/Memory",
    "dojo/store/Observable",
    "dojox/mobile/RoundRectStoreList",
    "app/util/app"
], function (declare, array, string, Memory, Observable, RoundRectStoreList, app) {
    return declare("app.widget.special.home.ListChatMessage", [RoundRectStoreList], {
        resourceUrl: null,
        storeLabel: "Chat Message",
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

                this.setStore(itemStore);

                var socket = io.connect(this.resourceUrl);

                socket.on("connect", function () {
                    message("connect", "Connected");

                    socket.on("announcement", function (msg) {
                        message("announcement", msg);
                    });

                    socket.on("nicknames", function (nicknames) {
                        message("nicknames", JSON.stringify(nicknames));
                    });

                    socket.on("user message", message);

                    socket.on("reconnect", function () {
                        message("System", "Reconnected to the server");
                    });

                    socket.on("reconnecting", function () {
                        message("System", "Attempting to re-connect to the server");
                    });

                    socket.on("error", function (e) {
                        message("System", (e ? e : "A unknown error occurred"));
                    });

                    socket.on("disconnect", function () {
                        message("disconnect", "Disconnected");
                    });

                    function message(from, msg) {
                        console.debug(from + ": " + msg);
                        /*array.forEach(itemStore.query({}), function (item, index) {
                            itemStore.remove(item.id);
                        });
                        array.forEach(response.content.data, function (item, index) {
                            itemStore.put(item);
                        });*/
                        itemStore.put({ "id": itemData.length + 1, "label": from, "rightText": msg });
                    }
                });
            }
        }
    });
});
