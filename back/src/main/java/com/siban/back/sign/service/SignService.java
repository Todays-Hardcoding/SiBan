package com.siban.back.sign.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.sign.domain.User;
import com.siban.back.sign.repository.SignRepository;

@Service
public class SignService{
	@Autowired
	private SignRepository signRepository;
	
//	회원가입
	public User insertUser(User user) {
		return signRepository.save(user);
	}

//	아이디 중복확인
	public Boolean checkId(String userId) {
		return signRepository.existsById(userId);
	}
//	이메일 중복확인
	public Boolean checkEmail(String email) {
		return signRepository.existsById(email);
	}

	
	public Optional<User> findbyUserId(String userId) {
		return signRepository.findByUserId(userId);
	}



}
