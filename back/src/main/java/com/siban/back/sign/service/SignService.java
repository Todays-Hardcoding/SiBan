package com.siban.back.sign.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.sign.domain.User;
import com.siban.back.sign.repository.SignRepository;

@Service
public class SignService{
	@Autowired
	private SignRepository signRepository;
	
	public User insertUser(User user) {
		return signRepository.save(user);
	}

}
