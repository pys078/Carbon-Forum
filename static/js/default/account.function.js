/*
 * Carbon-Forum
 * https://github.com/lincanbin/Carbon-Forum
 *
 * Copyright 2006-2017 Canbin Lin (lincanbin@hotmail.com)
 * http://www.94cb.com/
 *
 * Licensed under the Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * A high performance open-source forum software written in PHP. 
 */

function CheckUserName() {
	// 去除用户名长度限制
	if ($("#UserName").val()) {
		$.ajax({
			url: WebsitePath + '/json/user_exist',
			data: {
				UserName: $("#UserName").val()
			},
			type: 'post',
			dataType: 'json',
			success: function(Json) {
				if (Json.Status == 1) {
					$("#UserName").addClass("inputnotice");
				} else {
					$("#UserName").removeClass("inputnotice");
				}
			}
		});
	} else {
		$("#UserName").addClass("inputnotice");
	}
}

function CheckPassword() {
	if ($("#Password").val().length < 6){
		$("#Password").addClass("inputnotice");
	}else{
		$("#Password").removeClass("inputnotice");
	}
}

function CheckMail() {
	var EmailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if ($("#Email").val().length >= 5 && EmailReg.test($("#Email").val())) {
		$("#Email").removeClass("inputnotice");
	} else {
		$("#Email").addClass("inputnotice");
	}
}
