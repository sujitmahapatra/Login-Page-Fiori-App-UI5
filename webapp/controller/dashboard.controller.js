sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, MessageBox, JSONModel) {
    "use strict";

    return Controller.extend("app01.controller.dashboard", {
        onInit: function () {
            // Demo recent activity data
            var oRecentActivities = new JSONModel({
                recentActivities: [
                    {
                        title: "Logged In",
                        description: "User logged into the system"
                    },
                    {
                        title: "Submitted Feedback",
                        description: "User submitted feedback on the dashboard"
                                       }
                ]
            });

            this.getView().setModel(oRecentActivities);
        },

        onNavBackToHome: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home_view");
        },

        onSubmitFeedback: function () {
            MessageToast.show("Navigating to feedback form...");
        },

        onViewReports: function () {
            MessageBox.information("Reports feature coming soon!");
        },

        onOpenSettings: function () {
            MessageBox.information("Settings panel will be available in the next release.");
        }
    });
});
