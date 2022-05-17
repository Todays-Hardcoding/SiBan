package com.siban.back.sign.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.sign.domain.User;

@Repository
public interface SignRepository extends JpaRepository<User, Long>{

	public Optional<User> findByUserId(String userId);
	


}
