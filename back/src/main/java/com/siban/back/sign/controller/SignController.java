package com.siban.back.sign.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SignController {
	

	@GetMapping("/test.act")
	public String test() {
		System.out.println("여기서라도 떠야지? ");
		return "몰?루...";
	}
	
	
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
		
	}
	
	
}
