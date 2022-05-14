package com.siban.back.mypage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.mypage.repository.ScheduleRepository;

@Service
public class ScheduleService {
	
	@Autowired
	private ScheduleRepository scheduleRepository;

}
