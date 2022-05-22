package com.siban.back.board.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.siban.back.board.domain.Post;
import com.siban.back.board.domain.Reply;
import com.siban.back.board.repository.ReplyRepository;
import com.siban.back.sign.domain.User;

@Service
public class ReplyService {
	
	@Autowired
	ReplyRepository replyRepository;
	
	public Reply insertReply(Reply reply, Post post, User user) {
		Reply result;
		Reply temp = replyRepository.findByPost(post);
		
		if(temp == null) {
			result = replyRepository.save(reply);
		} else {
			replyRepository.deleteByPost(post);
			result = replyRepository.save(reply);
		}
		
		return result;
	}
	
	public Reply findByPost(Post post) {		
		return replyRepository.findByPost(post);
	}
}
