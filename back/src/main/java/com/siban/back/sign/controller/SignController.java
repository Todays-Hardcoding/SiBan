package com.siban.back.sign.controller;

import java.util.HashMap;
import java.util.Map;

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
		User user = User.builder().userId(param.get("id")).userPassword(param.get("pw")).userEmail(param.get("email"))
				.userName(param.get("name")).userTel(param.get("tel")).userHeight(param.get("height"))
				.userWeight(param.get("weight")).build();
		signService.insertUser(user);

		return user;

	}

	@PostMapping("/checkId.act")
	public Map<String, Boolean> checkId(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		boolean temp = true;
		System.out.println(param.get("id"));
		// 아이디가 있으면 false
		User checkId = signService.findByUserId(param.get("id"));
		if (checkId != null) {
			temp = false;
		}
		result.put("checkId", temp);
		System.out.println(temp);
		System.out.println(result);
		return result;
	}
	
	   @PostMapping("/checkEmail.act")
	   public Map<String, Boolean> checkEmail(@RequestBody Map<String, String> param) {
	      Map<String, Boolean> result = new HashMap<>();
	      boolean temp = true;
	      System.out.println(param.get("email"));
	      // 이메일이 있으면 false
	      User checkEmail = signService.findByUserEmail(param.get("email"));
	      if(checkEmail != null) {
	         temp = false;
	      }
	      result.put("checkEmail", temp);
	      System.out.println(temp);
	      System.out.println(result);
	      return result;
	   }

}