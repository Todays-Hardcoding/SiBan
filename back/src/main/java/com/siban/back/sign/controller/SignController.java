package com.siban.back.sign.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

	@RequestMapping(value = "/register.act", method = RequestMethod.POST)
	public User register(@RequestBody Map<String, Object> param) {
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

		return signService.insertUser(user);

	}

}
