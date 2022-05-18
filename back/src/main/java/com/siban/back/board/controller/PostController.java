package com.siban.back.board.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.board.domain.Post;
import com.siban.back.board.service.PostService;
import com.siban.back.workout.domain.Workout;

@RestController
public class PostController {
	
	@Autowired
	PostService postService;
	
	@PostMapping("/insertInquiry.act")
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
	
	@PostMapping("/selectInquiry.act")
	public List<Post> selectInquiry(){
		List<Post> result = new ArrayList<>();
		
		result = postService.selectInquiry();
		
		System.out.println(result);
		
		return result;
	}
}
