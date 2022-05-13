package com.siban.back.sign.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SignController {
	
	@PostMapping("/test.act")
	public String test() {
		System.out.println("여기서라도 떠야지? ");
		return "몰?루...";
	}
}
