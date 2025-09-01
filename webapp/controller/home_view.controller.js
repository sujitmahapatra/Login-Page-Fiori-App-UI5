sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app01.controller.home_view", {
        onInit: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("dashboard").attachPatternMatched(this._onObjectMatched,this);
            //initialize the model
            var oModel = new sap.ui.model.json.JSONModel();
            this.getOwnerComponent().setModel(oModel);

        },

        _onObjectMatched: function(oEvent){
            var user_name=oEvent.getParameter("arguments").name;
            var pass_word=oEvent.getParameter("arguments").pass;
            this.getView().getModel().setProperty("/username",user_name);
            this.getView().getModel().setProperty("/password",pass_word);
        },

        loginButton : function (){
			let username = this.getView().byId("input1").getValue();
            let password = this.getView().byId("input2").getValue();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("dashboard", {
                name: username,
                pass: password
            });
		},


        onRegisterLinkPress: function () {
    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    oRouter.navTo("registration");
}

    });
});