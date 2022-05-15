package com.siban.back.sign.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;
import com.siban.back.sign.domain.User;


@RestController
public class SignController {
	

	@GetMapping("/test.act")
	public String test() {
		System.out.println("여기서라도 떠야지? ");
		return "몰?루...";
	}
	
	
	@RequestMapping(value="/test2.json", method = RequestMethod.POST)
	public String test2(@RequestBody Map<String, Object> param) {
		
		
		System.out.println(param.toString());
//		JsonObject obj = new JsonObject();
//		
//		Map<String, String> data = new HashMap<String, String>();
//		data.put("sendData", "loginId");
//		
		String id =  ""+param.get("loginId");
		String pw = "" + param.get("loginPw");
		
		System.out.println(param.get("loginId"));
		System.out.println(param.get("loginPw"));
		System.out.println("=====================================");
		System.out.println(id);
		System.out.println(pw);
		
		return null;
	}
	
	
}
