//package com.siban.back.board.domain;
//
//import java.time.LocalDateTime;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.validation.constraints.NotNull;
//
//import com.siban.back.sign.domain.User;
//
//import lombok.Data;
//
//@Data
//@Entity
//public class Reply {
//	private User user;
//	private Post post;
//
//	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
//	private String replyCode;
//	
//	@NotNull
//	@Column
//	private String replyContent;
//	
//	@NotNull
//	@Column
//	private LocalDateTime replyDate;
//
//}
