/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"com/sap/excercise2/test/unit/AllTests"
=======
		"com/sap/excercise1/test/unit/AllTests"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});