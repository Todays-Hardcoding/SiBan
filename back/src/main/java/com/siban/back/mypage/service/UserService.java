package com.siban.back.mypage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.mypage.repository.UserRepository;
import com.siban.back.sign.domain.User;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	public User findByUserId(String userId) {
		return userRepository.findByuserId(userId);
	}
	

}
