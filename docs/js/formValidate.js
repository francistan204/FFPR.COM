/********f************
    
	Project 4 Javascript
	Name: Francis Tan
	Date: Dec 12, 2023	
	Description: Project 4 Website Development & Deployment JavaScript file

*********************/

function validate(e) {

	hideErrors();

	if (formHasErrors()) {

		e.preventDefault();


		return false;
	}

	return true;
}

function formHasErrors() {

	let errorFlag = false;

	let requiredFields = ["name", "number", "email"];

	for(let i = 0; i < requiredFields.length; i++) {
		let textField = document.getElementById(requiredFields[i]);
		if(!formFieldHasInput(textField)){
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
			
			if(!errorFlag){
				textField.focus();
				textField.select();
			}

			errorFlag = true;
		}
	}

	let emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
	let emailValue = document.getElementById("email").value;

	if(!emailRegex.test(emailValue)){
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}
		errorFlag = true;
	}

	let numberRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
	let numberValue = document.getElementById("number").value;

	if(!numberRegex.test(numberValue)){
		document.getElementById("numberFormat_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("number").focus();
			document.getElementById("number").select();
		}
		errorFlag = true;
	}
	return errorFlag;
}

function trim(str) 
{

	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(fieldElement){
	if(fieldElement.value == null || trim(fieldElement.value) == "")
	{
		return false;
	}

	return true;
}

function resetForm(e) {
	
	if (confirm('Reset?')) {
		
		hideErrors();

		
		document.getElementById("name").focus();

		
		return true;
	}

	
	e.preventDefault();

	
	return false;
}

function hideErrors() {
	
	let error = document.getElementsByClassName("error");

	
	for (let i = 0; i < error.length; i++) {
		
		error[i].style.display = "none";
	}
}

function load() {

	document.getElementById("form").addEventListener("submit", validate);

	document.getElementById("form").reset(); 
	
	document.getElementById("form").addEventListener("reset", resetForm);

	hideErrors();
	
}

document.addEventListener("DOMContentLoaded", load);
