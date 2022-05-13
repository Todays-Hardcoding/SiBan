package com.siban.back.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siban.back.mypage.domain.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

}
