package com.siban.back.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siban.back.mypage.domain.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {

}
