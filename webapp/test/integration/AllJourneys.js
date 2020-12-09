sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
<<<<<<< HEAD
		viewNamespace: "com.sap.excercise2.view.",
=======
		viewNamespace: "com.sap.excercise1.view.",
>>>>>>> refs/heads/master
		autoWait: true
	});
});