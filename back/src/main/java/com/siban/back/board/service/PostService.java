package com.siban.back.board.service;

import java.util.List;
import java.util.Optional;

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
	
	public Post selectDetail(Long index) {
		return postRepository.findByPostCode(index);
	}
	
	public void updateViews(Long index) {
		postRepository.updateViews(index);
	}
}
