package com.siban.back.mypage.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.mypage.service.UserService;
import com.siban.back.sign.domain.User;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/showUserInfo.act")
	public User showUserInfo(@RequestBody Map<String, String> param) {
		
		User user = userService.findByUserId(param.get("userId"));
		
		
		System.out.println("show connected");
		return user;
	
	}
	
	@PostMapping("/updateUserInfo.act")
	public User updateUserInfo(@RequestBody Map<String, String> param) {
		User user = userService.findByUserId(param.get("userId"));
		System.out.println("update connected");
		
		String userEmail = param.get("userEmail");
		String userName = param.get("userName");
		String userTel = param.get("userTel");
		String userHeight = param.get("userHeight");
		String userWeight = param.get("userWeight");
		
		user.setUserEmail(userEmail);
		user.setUserName(userName);
		user.setUserTel(userTel);
		user.setUserHeight(userHeight);
		user.setUserWeight(userWeight);
		
		userService.updateUser(user);
		
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
	
	@PostMapping("/updateUserImage.act")
	public User profileImage(@RequestBody Map<String, String> param) {
		
		User user = userService.findByUserId(param.get("userId"));
		
		
		String userProfile = param.get("userProfile");
		
		user.setUserProfile(userProfile);
		
		userService.updateUser(user);
		
		return user;
	}
}
