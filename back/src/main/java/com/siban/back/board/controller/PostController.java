package com.siban.back.board.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.board.domain.Post;
import com.siban.back.board.service.PostService;

@RestController
public class PostController {
	
	@Autowired
	PostService postService;
	
	@RequestMapping(value="/insertInquiry.act", method = RequestMethod.POST)
	public Post insertInquiry(@RequestBody Map<String, Object> param) {
		Post post = new Post();

		String categori = (String) param.get("categoriValue");
		String title = (String) param.get("title");
		String content = (String) param.get("content");
		
		post.setPostCategory(categori);
		post.setPostTitle(title);
		post.setPostContent(content);
		
		return postService.insertInquiry(post);
	}
}
