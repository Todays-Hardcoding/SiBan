package com.siban.back.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siban.back.mypage.domain.Diet;


public interface DietRepository extends JpaRepository<Diet, Long> {

}
