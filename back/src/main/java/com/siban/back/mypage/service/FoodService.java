package com.siban.back.mypage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.mypage.repository.DietRepository;
import com.siban.back.mypage.repository.FoodRepository;

@Service
public class FoodService {
	
	
	@Autowired
	private FoodRepository foodRepository; 

}
