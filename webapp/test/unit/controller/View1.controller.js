/*global QUnit*/

sap.ui.define([
<<<<<<< HEAD
	"com/sap/excercise2/controller/View1.controller"
=======
	"com/sap/excercise1/controller/View1.controller"
>>>>>>> refs/heads/master
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});