package com.siban.back.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.mypage.domain.Schedule;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

}
