package com.siban.back.sign.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.siban.back.sign.service.SignService;

@Controller
public class SignController {
	@Autowired
	private SignService signService;
}
