sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
/**
 * @param {typeof sap.ui.ore.mvc.Controller} Controller
 */
function (Controller) {
	"use strict";

	return Controller.extend("ns.ui5-demo.controller.View1", {
		onInit: function () {

		},
		
	onShowHello: function () {
		// show a native JavaScript alert
		//updated on  April 26

		alert("Hello Team!");
		}
	});
});
