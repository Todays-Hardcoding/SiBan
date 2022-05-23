package com.siban.back.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.siban.back.board.domain.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{
	public Post findByPostCode(Long index);
	
	@Transactional
	@Modifying
	@Query(value = "update Post set postViews = postViews+1 where postCode = :index")
	public void updateViews(@Param(value="index")Long index);
}
