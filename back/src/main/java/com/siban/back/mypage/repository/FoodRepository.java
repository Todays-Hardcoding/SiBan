package com.siban.back.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.mypage.domain.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

}
