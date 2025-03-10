<?php
if (!defined('InternalAccess')) exit('error: 403 Access Denied');
if (empty($Lang) || !is_array($Lang))
	$Lang = array();

$Lang = array_merge($Lang, array(
	'Email' => '电子邮箱',
	'Confirm_Password' => '再次输入密码',
	'Prohibit_Registration' => '管理员已经禁止注册或Authy服务器连接失败',
	'This_User_Name_Already_Exists' => '这名字太火了，已经被抢注了，换一个吧！',
	'VerificationCode_Error' => '验证码错误',
	'Email_Error' => '电子邮箱不符合规则，电子邮箱正确格式为abc@domain.com',
	'UserName_Error' => '用户名不符合规则。请准确填写您的Minecraft ID，可含有数字、字母、下划线',
	'Forms_Can_Not_Be_Empty' => '用户名、密码、验证码 必填'
	));
