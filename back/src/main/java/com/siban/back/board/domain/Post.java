package com.siban.back.board.domain;

import java.time.LocalDateTime;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.siban.back.sign.domain.User;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Entity
public class Post {
//	private User user;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long postCode;
	
	@NotNull
	@Column
	private String postCategory;
	
	@NotNull
	@Column
	private String postTitle;
	
	@NotNull
	@Column
	private String postContent;
	
	@Column
	private String postRegDate;
	
	@Column
	private int postViews;
	
	@PrePersist
	@PreUpdate
	public void createDate() {
		this.postViews = 0;
	    Date today = new Date();

	    SimpleDateFormat date = new SimpleDateFormat("yyyy/MM/dd");
	    postRegDate = date.format(today);
	}

}
