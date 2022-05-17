package com.siban.back.sign.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.sign.domain.User;
import com.siban.back.sign.service.SignService;



import lombok.Builder;




@RestController
public class SignController {

	@Autowired
	private SignService signService;

	
	@PostMapping("/register.act")
	public User register(@RequestBody Map<String, String> param) {

		User user = new User();
		String id = param.get("id");
		String pw = param.get("pw");
		String email = param.get("email");
		String name = param.get("name");
		String tel = param.get("tel");
		String height = param.get("height");
		String weight = param.get("weight");
		
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
	
	@PostMapping("/checkId.act")
	public Map<String, Boolean> checkId(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		
		// 아이디가 있으면 true
		boolean checkId = signService.findByUserId(param.get("id"));
		result.put("checkId", checkId);
		
		return result;
	}
	
	@PostMapping("/checkEmail.act")
	public Map<String, Boolean> checkEmail(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		
		// email이 있으면 true
		boolean checkEmail = signService.findByUserEmail(param.get("email"));
		result.put("checkEmail", checkEmail);
		
		return result;
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
