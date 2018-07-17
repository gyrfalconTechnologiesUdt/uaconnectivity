$(document) .ready(function(){

//Redirect page start
$("#fbId").click(function(){
    window.location.href = "http://www.facebook.com/";	
});
$("#googleId").click(function(){
    window.location.href = "https://plus.google.com/";	
});
$("#twitId").click(function(){
    window.location.href = "http://www.twitter.com/";	
});
$("#singnupId").click(function(){
    window.location.href = "ua_register.html";	
});
$("#passwordId").click(function(){
    window.location.href = "ua_forgotpassword.html";	
});
$("#loginId").click(function(){
    window.location.href = "ua_homepage.html";	
});
$("#registerId").click(function(){
    window.location.href = "ua_login.html";	
});

//Redirect page End
	
	
//ua login page start

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

//ua login page End

// reset password start
$("#mailInpt input").focus(function(e){	
$("#mailLbl").addClass("mailLbl");
});

$("#mailInpt input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#mailLbl").removeClass("mailLbl");
		
	}
});	

// reset password End

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

//service page start
$("#listId1").click(function () {
    $("#menu1").hide();
});
$("#listId2").click(function () {
    $("#menu2").hide();
});
$("#listId3").click(function () {
    $("#menu3").hide();
});
$("#listId4").click(function () {
    $("#menu4").hide();
});
$(".overlay1").hide();
$("#confirmId").click(function () {
    $(".overlay1").show();
});
$("#CloseId").click(function () {
    $(".overlay1").hide();
});
$("#okId").click(function () {
    $(".overlay1").hide();
});	
$("#msgId").hide();
$("#confirmId").click(function () {
    $("#msgId").show();
});
$("#okId").click(function () {
    $("#msgId").hide();
});
$("#CloseId").click(function () {
    $("#msgId").hide();
});

//service page End

//contact page start
$("#msgId1").hide();
$("#sendId").click(function () {
    $("#msgId1").show();
});
$("#okId1").click(function () {
    $("#msgId1").hide();
});
$("#CloseId1").click(function () {
    $("#msgId1").hide();
});
//contact page End


//home page start
$("#fblinkid").click(function(){
    window.location.href = "http://www.facebook.com/";	
});
$("#googleplusId").click(function(){
    window.location.href = "https://plus.google.com/";	
});
$("#twiterId").click(function(){
    window.location.href = "http://www.twitter.com/";	
});
$("#linkdinlink").click(function(){
    window.location.href = "https://www.linkedin.com/";	
});
$("#flickerlink").click(function(){
    window.location.href = "https://www.flickr.com/";	
});
$("#servicelink").click(function(){
    window.location.href = "ua_servicespage.html";	
});
$("#contactpagelink").click(function(){
    window.location.href = "ua_contact.html";	
});
	// footer link start
$("#fbid").click(function(){
    window.location.href = "http://www.facebook.com/";	
});
$("#googleId").click(function(){
    window.location.href = "https://plus.google.com/";	
});
$("#twitId").click(function(){
    window.location.href = "http://www.twitter.com/";	
});
$("#linkdinid").click(function(){
    window.location.href = "https://www.linkedin.com/";	
});
$("#flickerid").click(function(){
    window.location.href = "https://www.flickr.com/";	
});
//home page end


});
