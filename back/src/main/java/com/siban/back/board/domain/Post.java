package com.siban.back.board.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.siban.back.sign.domain.User;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
public class Post {
	User user;
	String postCode;
	String postCategory;
	String postTitle;
	String postContent;
	private LocalDateTime postRegDate;

}
