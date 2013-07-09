define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/string",
    "dojo/store/Memory",
    "dojo/store/Observable",
    "dojox/mobile/RoundRectStoreList",
    "app/util/app"
], function (declare, lang, array, string, Memory, Observable, RoundRectStoreList, app) {
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

                var message = lang.hitch(this, function message(from, msg) {
                    console.debug(from + ": " + msg);
                    itemStore.put({ "id": this.id + "_" + (itemData.length + 1), "label": from, "rightText": msg });
                });

                var socket = io.connect(this.resourceUrl, { "force new connection": false });

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
                });
            }
        }
    });
});
