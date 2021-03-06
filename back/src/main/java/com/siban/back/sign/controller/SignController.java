package com.siban.back.sign.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.sign.domain.User;
import com.siban.back.sign.service.SignService;

@RestController
public class SignController {

   @Autowired
   private SignService signService;

	@PostMapping("/register.act")
	public User register(@RequestBody Map<String, String> param) {
		System.out.println(param);
		User user = User.builder().userId(param.get("userId")).userPw(param.get("userPw")).userEmail(param.get("userEmail"))
				.userName(param.get("userName")).userTel(param.get("userTel")).userHeight(param.get("userHeight")).userAddr(param.get("userAddr"))
				.userWeight(param.get("userWeight")).build();
		signService.insertUser(user);
		
		
		System.out.println(user);

		return user;

	}

	@PostMapping("/checkId.act")
	public Map<String, Boolean> checkId(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		boolean temp = false;
		System.out.println(param.get("userId"));
		// 아이디가 있으면 false
		User checkId = signService.findByUserId(param.get("userId"));
		System.out.println(checkId);
		if (checkId != null) {
			temp = true;
		}
		result.put("checkId", temp);
		System.out.println(result);
		return result;
	}
	
	@PostMapping("/checkEmail.act")
	public Map<String, Boolean> checkEmail(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		boolean temp = false;
		System.out.println(param.get("userEmail"));
		// 이메일이 있으면 false
		User checkEmail = signService.findByUserEmail(param.get("userEmail"));
		if(checkEmail != null) {
			temp = true;
		}
		result.put("checkEmail", temp);
		System.out.println(temp);
		System.out.println(result);
		return result;
	}
	
	@PostMapping("/login.act")
	public Map<String, Boolean> login(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		boolean temp = false;
		System.out.println(param.get("userId"));
		System.out.println(param.get("userPw"));
		User user = signService.findByUserId(param.get("userId"));
		if(Objects.isNull(user)) {
			temp = false;
		}else if(user.getUserId().equals(param.get("userId")) && user.getUserPw().equals(param.get("userPw"))){
	
			temp = true;
		}
		result.put("result", temp);
		System.out.println(result);
		return result;
	}
	@PostMapping("/searchEmail.act")
	public Map<String, String> searchEmail(@RequestBody Map<String, String> param) {
		Map<String, String> result = new HashMap<>();
		String temp = "";
		System.out.println(param.get("searchEmail"));
		// 아이디가 있으면 false
		User user = signService.findByUserEmail(param.get("searchEmail"));
		System.out.println(user);
		if (user != null) {
			temp = user.getUserId();
		}
		
		
		result.put("searchId", temp);
//		System.out.println(temp);
		System.out.println(result);
		return result;
	}
	
	
	
	@PostMapping("/SearchPw.act")
	public Map<String, String> SearchPw(@RequestBody Map<String, String> param) {
		Map<String, String> result = new HashMap<>();
		String temp = "";
		System.out.println(param.get("searchId"));
		System.out.println(param.get("searchTel"));
		// 아이디가 있으면 false
		User user = signService.findByUserId(param.get("searchId"));
		//System.out.println(user);
		if (user.getUserId().equals(param.get("searchId")) && user.getUserTel().equals(param.get("searchTel"))) {
			System.out.println(user.getUserPw());
			temp = user.getUserPw();
		}
		result.put("searchPw", temp);
//		System.out.println(temp);
		System.out.println(result);
		return result;
	}

	@PostMapping("/searchById.act")
	public User searchById(@RequestBody Map<String, String> param) {
		
		User result = signService.findByUserId(param.get("loginInfo"));
		
		System.out.println(result);
		
		return result;
	}



}
