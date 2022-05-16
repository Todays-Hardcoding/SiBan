package com.siban.back.sign.service;


import org.springframework.beans.factory.annotation.Autowired;

import com.siban.back.sign.domain.User;
import com.siban.back.sign.repository.SignRepository;

public class SignService{
	@Autowired
	private SignRepository signRepository;
	
	public User insert(User user) {
		return signRepository.save(user);
	}

}
