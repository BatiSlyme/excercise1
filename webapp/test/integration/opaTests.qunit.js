/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"com/sap/excercise2/test/integration/AllJourneys"
=======
		"com/sap/excercise1/test/integration/AllJourneys"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});