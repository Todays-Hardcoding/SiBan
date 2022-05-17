package com.siban.back.sign.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.sign.domain.User;
import com.siban.back.sign.service.SignService;



@RestController
public class SignController {
	
	@Autowired
	private SignService signService;
	
	
	@RequestMapping(value="/register.act", method = RequestMethod.POST)
	public User register(@RequestBody Map<String, Object> param) {
		//User user = User.builder().userId(param.get("id")).build();
		User user = new User();
		String id = (String) param.get("id");
		String pw = (String) param.get("pw");
		String email = (String) param.get("email");
		String name = (String) param.get("name");
		String tel = (String) param.get("tel");
		String height = (String) param.get("height");
		String weight = (String) param.get("weight");
		
		user.setUserId(id);
		user.setUserPassword(pw);
		user.setUserEmail(email);
		user.setUserName(name);
		user.setUserTel(tel);
		user.setUserHeight(height);
		user.setUserWeight(weight);
		
		//boolean result = false;
		//if(signService.findbyUserId(id).isPresent()) {
			
	
		signService.insertUser(user);
		
	
		
		return user;
	
	}
	
	
	

	
	/*
	@RequestMapping(value="/test2.json", method = RequestMethod.POST)
	public Map<String, String> test2(@RequestBody Map<String, Object> param) {
		
		Map<String, String> result = new HashMap<String, String>();
		
		System.out.println(param.toString());
//		JsonObject obj = new JsonObject();
//		
//		Map<String, String> data = new HashMap<String, String>();
//		data.put("sendData", "loginId");
//		
		String id =  "안녕 난 괴물이라구해 "+param.get("loginId");
		String pw = "" + param.get("loginPw");
		
//		System.out.println(param.get("loginId"));
//		System.out.println(param.get("loginPw"));
//		System.out.println("=====================================");
//		System.out.println(id);
//		System.out.println(pw);
		
		result.put("id", id);
		
		System.out.println(result);
		return result;
		
	}*/
	
	
	
}
