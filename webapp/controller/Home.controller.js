sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapp.controller.Home", {
            onInit: function () {

            },
            onPress: function (oEvent) {
                // Origem do evento
                const item = oEvent.getSource();
                
                // Título do item
                const title = item.getTitle();

                // Mensagem a ser exibida
                const message = `O item: ${title} foi clicado!`;

                MessageBox.information(message,{
                    title: "Informação do Item",
                });
            }
        });
    });
