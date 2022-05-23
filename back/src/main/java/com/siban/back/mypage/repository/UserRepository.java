package com.siban.back.mypage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.siban.back.sign.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query(value = "select * from user where "
			+ "user_id = :userId"
			, nativeQuery = true)
	User findByUserId(@Param("userId") String userId);

}
