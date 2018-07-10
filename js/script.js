$(document) .ready(function(){
	
$("#userNameInput input").focus(function(e){	
$("#userNameLbl").addClass("userNameLbl");
});

$("#userNameInput input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#userNameLbl").removeClass("userNameLbl");
		
	}
});	


$("#userNameInput input").focus(function(e){
	
$("#emailIcon").addClass("emailIcon");

});
$("#userNameInput input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
$("#emailIcon").removeClass("emailIcon");
	}
});
$("#passwordinput input").focus(function(e){	
$("#passwordLbl").addClass("passwordLbl");
});

$("#passwordinput input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#passwordLbl").removeClass("passwordLbl");
		
	}
});	

$("#passwordinput input").focus(function(e){
	
$("#passwordIcon").addClass("passwordIcon");

});
$("#passwordinput input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
$("#passwordIcon").removeClass("passwordIcon");
	}
});

// ua sign up page start
$("#contactNoinput input").focus(function(e){	
$("#contNoLbl").addClass("contNoLbl");
});

$("#contactNoinput input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#contNoLbl").removeClass("contNoLbl");
		
	}
});	


$("#confirmPasswordinput input").focus(function(e){	
$("#cPasswordLbl").addClass("cPasswordLbl");
});

$("#confirmPasswordinput input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#cPasswordLbl").removeClass("cPasswordLbl");
		
	}
});	

$("#emailIdinput input").focus(function(e){	
$("#emailIdLbl").addClass("emailIdLbl");
});

$("#emailIdinput input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#emailIdLbl").removeClass("emailIdLbl");
		
	}
});	

});
