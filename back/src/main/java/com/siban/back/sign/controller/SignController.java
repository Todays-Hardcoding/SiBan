package com.siban.back.sign.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
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

	@PostMapping("/register.act")
	public User register(@RequestBody Map<String, String> param) {
<<<<<<< HEAD
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

		// boolean result = false;
		// if(signService.findbyUserId(id).isPresent()) {

=======
		User user = User.builder().userId(param.get("id")).userPassword(param.get("pw")).userEmail(param.get("email"))
				.userName(param.get("name")).userTel(param.get("tel")).userHeight(param.get("height"))
				.userWeight(param.get("weight")).build();
>>>>>>> f07df6eb78380dd1ce9614f747743a5bab73e273
		signService.insertUser(user);

		return user;

	}

	@PostMapping("/checkId.act")
	public Map<String, Boolean> checkId(@RequestBody Map<String, String> param) {
		Map<String, Boolean> result = new HashMap<>();
		boolean temp = false;
		System.out.println(param.get("id"));
		// 아이디가 있으면 false
		User checkId = signService.findByUserId(param.get("id"));
<<<<<<< HEAD
		if (checkId != null) {
			temp = false;
		} else {
=======
		System.out.println(checkId);
		if (checkId != null) {
>>>>>>> f07df6eb78380dd1ce9614f747743a5bab73e273
			temp = true;
		}
		result.put("checkId", temp);
//		System.out.println(temp);
		System.out.println(result);
		return result;
	}
<<<<<<< HEAD
	/*
	 * @PostMapping("/checkEmail.act") public Map<String, Boolean>
	 * checkEmail(@RequestBody Map<String, String> param) { Map<String, Boolean>
	 * result = new HashMap<>();
	 * 
	 * // email이 있으면 true User checkEmail =
	 * signService.findByUserEmail(param.get("email")); result.put("checkEmail",
	 * checkEmail);
	 * 
	 * return result; }
	 */

	/*
	 * @RequestMapping(value="/test2.json", method = RequestMethod.POST) public
	 * Map<String, String> test2(@RequestBody Map<String, Object> param) {
	 * 
	 * Map<String, String> result = new HashMap<String, String>();
	 * 
	 * System.out.println(param.toString()); // JsonObject obj = new JsonObject();
	 * // // Map<String, String> data = new HashMap<String, String>(); //
	 * data.put("sendData", "loginId"); // String id =
	 * "안녕 난 괴물이라구해 "+param.get("loginId"); String pw = "" + param.get("loginPw");
	 * 
	 * // System.out.println(param.get("loginId")); //
	 * System.out.println(param.get("loginPw")); //
	 * System.out.println("====================================="); //
	 * System.out.println(id); // System.out.println(pw);
	 * 
	 * result.put("id", id);
	 * 
	 * System.out.println(result); return result;
	 * 
	 * }
	 */

}
=======
	
	   @PostMapping("/checkEmail.act")
	   public Map<String, Boolean> checkEmail(@RequestBody Map<String, String> param) {
	      Map<String, Boolean> result = new HashMap<>();
	      boolean temp = false;
	      System.out.println(param.get("email"));
	      // 이메일이 있으면 false
	      User checkEmail = signService.findByUserEmail(param.get("email"));
	      if(checkEmail != null) {
	         temp = true;
	      }
	      result.put("checkEmail", temp);
	      System.out.println(temp);
	      System.out.println(result);
	      return result;
	   }

}
>>>>>>> f07df6eb78380dd1ce9614f747743a5bab73e273
