package com.siban.back.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.board.domain.Post;
import com.siban.back.board.repository.PostRepository;

@Service
public class PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	public Post insertInquiry(Post post) {
		return postRepository.save(post);
	}
	
	public List<Post> selectInquiry() {
		return postRepository.findAll();
	}
	
}
