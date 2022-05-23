package com.siban.back.board.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.board.domain.Post;
import com.siban.back.board.domain.Reply;
import com.siban.back.board.service.PostService;
import com.siban.back.board.service.ReplyService;
import com.siban.back.sign.domain.User;
import com.siban.back.sign.service.SignService;

@RestController
public class ReplyController {
	
	@Autowired
	ReplyService replyService;
	
	@Autowired
	PostService postService;
	
	@Autowired
	SignService signService;
	
	@PostMapping("/insertReply.act")
	public Map<String, String> insertReply(@RequestBody Map<String, String> param) {
		System.out.println(param);
		
		Long index = Long.parseLong(param.get("result"));
		Map<String, String> result = new HashMap<>();
		
		User user = signService.findByUserId(param.get("loginInfo"));
		Post post = postService.selectDetail(index);

		Reply reply = Reply.builder().user(user).post(post).replyContent(param.get("reply")).build();
		replyService.insertReply(reply, post, user);
		
		result.put("userId", user.getUserId());
		result.put("postCode", ""+post.getPostCode());
		result.put("replyCode", ""+reply.getReplyCode());
		result.put("replyContent", reply.getReplyContent());
		result.put("replyDate", reply.getReplyDate());
		
		return result;
	}
	
}
