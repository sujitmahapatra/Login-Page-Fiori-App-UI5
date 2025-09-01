sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (BaseController) => {
    "use strict";

    return BaseController.extend("app01.controller.registration", {
        onInit() {
        },

        onNavBackToHome: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home_view"); // Replace with your actual route name
        }

    });
});