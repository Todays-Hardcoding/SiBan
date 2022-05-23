package com.siban.back.board.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.siban.back.board.domain.Post;
import com.siban.back.board.domain.Reply;
import com.siban.back.board.service.PostService;
import com.siban.back.board.service.ReplyService;
import com.siban.back.sign.service.SignService;
import com.siban.back.workout.domain.Workout;

@RestController
public class PostController {
	
	@Autowired
	PostService postService;
	
	@Autowired
	SignService signService;
	
	@Autowired
	ReplyService replyService;
	
	@PostMapping("/insertInquiry.act")
	public Post insertInquiry(@RequestBody Map<String, Object> param) {
		Post post = new Post(); 
		Post result;

		String categori = (String) param.get("categoriValue");
		String title = (String) param.get("title");
		String content = (String) param.get("content");
		String loginInfo = (String) param.get("loginInfo");


		System.out.println(loginInfo);
		
		post.setPostCategory(categori);
		post.setPostTitle(title);
		post.setPostContent(content);
		post.setUser(signService.findByUserId(loginInfo));
		
		result = postService.insertInquiry(post);
		
		Reply reply = Reply.builder().user(post.getUser()).post(post).replyContent("").build();
		replyService.initReply(reply);
		
		return result;
	}
	
	@PostMapping("/selectInquiry.act")
	public List<Post> selectInquiry(){
		List<Post> result = new ArrayList<>();
		
		result = postService.selectInquiry();
		
		for(Post temp : result) {
			System.out.println(temp.toString());
		}
		
		return result;
	}
	
	@PostMapping("/selectDetail.act")
	public Map<String, String> selectDetail(@RequestBody Map<String, Long> param) {
		Map<String, String> result = new HashMap<>();
	
		Post post;
		String replyContent;
		
		postService.updateViews(param.get("result"));
		post = postService.selectDetail(param.get("result"));

		replyContent = replyService.findByPost(post).getReplyContent();
		System.out.println(replyContent);
		
		
		result.put("postCode", ""+post.getPostCode());
		result.put("postCategory", ""+post.getPostCategory());
		result.put("postTitle", ""+post.getPostTitle());
		result.put("postContent", ""+post.getPostContent());
		result.put("postRegDate", ""+post.getPostRegDate());
		result.put("postViews", ""+post.getPostViews());
		result.put("user", post.getUser().getUserId());
		result.put("replyContent", replyContent);
				
		return result;
	}
}
