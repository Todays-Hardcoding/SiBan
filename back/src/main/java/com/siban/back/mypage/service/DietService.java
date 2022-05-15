package com.siban.back.mypage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.mypage.repository.DietRepository;

@Service
public class DietService {
	
	@Autowired
	private DietRepository dietRepository;

}
