sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.core.routing.History} History
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   */
  function (Controller, History, JSONModel) {
    "use strict";

    return Controller.extend("com.lab2dev.firstapp.controller.Detail", {
      onInit: function () {
        const oRouter = this.getOwnerComponent().getRouter();

        //O método getRoute recebe como argumento o nome da rota que deseja adicionar o evento
        const routeDetail = oRouter.getRoute("RouteDetail");

        //O método attachPatternMatched recebe como argumento o nome da função que
        //será executada quando a rota for acessada
        routeDetail.attachPatternMatched(this.onObjectMatched, this);
      },
      onObjectMatched: function (oEvent) {
        //O método getParameter("arguments") retorna um objeto com os parâmetros passados na rota
        const oArgs = oEvent.getParameter("arguments");
        const productID = oArgs.productID;

        const oProductModel = new JSONModel({ productID: productID });

        this.getView().setModel(oProductModel, "detailView");
      },
      onNavBack: function () {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          const oComponent = this.getOwnerComponent();
          const oRouter = oComponent.getRouter();
          oRouter.navTo("RouteHome", {}, true);
        }
      },
    });
  }
);
