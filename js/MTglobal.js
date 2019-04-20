/**
 * File Name: MTglobal.js
 *
 * Revision History:
 *       Majid Tooranisama, 2019-04-14 : Created
 */

function MTAddRating_click() {
	if(this.checked){
		$("#MTRating").show();
	}
	else{
		$("#MTRating").hide();
	}
}

function MTFoodRating_click() {
    MTcalculateRatingAdd();
}

function MTServiceRating_click() {
    MTcalculateRatingAdd();
}

function MTValueRating_click() {
	MTcalculateRatingAdd();
}

function MTbtnSave_click() {
	MTAddFeedback();
}

function MTModifyRating_click() {
	if(this.checked){
		$("#MTEditRating").show();
	}
	else{
		$("#MTEditRating").hide();
	}
}

function MTModifyFoodRating_click() {
    MTcalculateRatingEdit();
}

function MTModifyServiceRating_click() {
    MTcalculateRatingEdit();
}

function MTModifyValueRating_click() {
	MTcalculateRatingEdit();
}

function MTbtnUpdate_click() {
	MTupdateFeedback();
}

function MTSaveDefault_click() {
	MTSaveDefaultEmail();
}

function MTbtnDelete_click() {
	MTdeleteFeedback();
}

function MTbtnCancel_click() {
	MTcancel();
}

function MTEditFeedbackPage_show() {
	MTshowCurrentReview();
}

function MTAddFeedbackPage_show() {
	MTshowAddFeedback();
}

function MTbtnClearData_click() {
	MTclearDatabase();
}

function MTViewFeedbackPage_show() {
	MTgetReview();
}

function MTinit() {
	console.info("DOM is ready");

	$("#MTAddRating").on("click", MTAddRating_click);

	$("#MTFoodRating").on("click", MTFoodRating_click);
	$("#MTServiceRating").on("click", MTServiceRating_click);
	$("#MTValueRating").on("click", MTValueRating_click);

	$("#MTModifyRating").on("click", MTModifyRating_click);

	$("#MTModifyFoodRating").on("click", MTModifyFoodRating_click);
	$("#MTModifyServiceRating").on("click", MTModifyServiceRating_click);
	$("#MTModifyValueRating").on("click", MTModifyValueRating_click);

	$("#MTSave").on("click", MTbtnSave_click);

	$("#MTSaveDefault").on("click", MTSaveDefault_click);
	$("#MTClearDatabase").on("click",MTbtnClearData_click);
	
	$("#MTBookPage").on("pageshow",MTAddFeedbackPage_show);
	$("#MTEditFeedbackPage").on("pageshow",MTEditFeedbackPage_show);
	$("#MTViewFeedbackPage").on("pageshow",MTViewFeedbackPage_show);

	$("#MTCancel").on("click",MTbtnCancel_click);
	$("#MTDelete").on("click",MTbtnDelete_click);
	$("#MTUpdate").on("click", MTbtnUpdate_click);
}

function MTinitDB(){
	try{
		DB.MTcreateDatabase();
		if (db) {
			console.info("Creating tables...");
			DB.MTcreateTables();
		}
		else{
			console.error("Error: Cannot create tables: database does not exist");
		}
	}
	catch(e){
		console.error("Error: (Fatal) error in initDB(). Can not proceed.");
	}
}

$(document).ready(function () {
	MTinit();
	MTinitDB();
});



