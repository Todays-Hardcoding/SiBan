package com.siban.back.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.board.domain.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{

}
