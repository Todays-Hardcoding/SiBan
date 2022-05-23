package com.siban.back.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.siban.back.board.domain.Post;
import com.siban.back.board.domain.Reply;

@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long>{
	public Reply findByReplyCode(Long index);
	public Reply findByPost(Post post);
	
	@Transactional
	public void deleteByPost(Post post);
}
