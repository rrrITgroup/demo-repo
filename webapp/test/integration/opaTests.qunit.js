/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/ui5-demo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
