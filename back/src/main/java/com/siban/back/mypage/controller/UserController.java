package com.siban.back.mypage.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.mypage.service.UserService;
import com.siban.back.sign.domain.User;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/updateUserInfo.act")
	public  User  updateUserInfo(@RequestBody Map<String, String> param) {
		System.out.println("난 몬스터야!");
		
		
		 User user = new User();
		 
		return user;
	
	}
	
	
	@PostMapping("/checkUserInfo.act")
	public User checkUserInfo(@RequestBody Map<String, String> param) {
		
		User testId = userService.findByUserId("TTAA");
		
		User user = new User();
		
		System.out.println(testId);
		System.out.println(testId.getUserHeight());
		System.out.println(testId.getUserWeight());
		
		user.setUserHeight(testId.getUserHeight());
		user.setUserWeight(testId.getUserWeight());
		return user;
	
	}
}
