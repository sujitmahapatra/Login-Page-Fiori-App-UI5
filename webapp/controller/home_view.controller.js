sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app01.controller.home_view", {
        onInit: function() {
        },
        // loginButton : function(){
        //     // let username = this.getView().byId("Input1").getValue();
        //     // let password = this.getView().byId("Input2").getValue();
        //     // alert("Username:"+username+"\n Password:"+password);
        //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        //     oRouter.navTo("Routedashboard");

        // }

        onloginButton : function (){
			var oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("dashboard")
		}
    });
});