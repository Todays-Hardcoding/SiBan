package com.siban.back.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.mypage.domain.Diet;

@Repository
public interface DietRepository extends JpaRepository<Diet, Long> {

}
