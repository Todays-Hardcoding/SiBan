package com.siban.back.board.domain;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.siban.back.sign.domain.User;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Reply {
	@NotNull
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name="userId")
	private User user;
	
	@NotNull
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name="postCode")
	private Post post;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long replyCode;
	
	@NotNull
	@Column
	private String replyContent;
	
	@Column
	private String replyDate;

	@PrePersist
	@PreUpdate
	public void createDate() {
	    Date today = new Date();

	    SimpleDateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	    replyDate = date.format(today);
	}
	
	@Builder
	public Reply(@NotNull User user, @NotNull Post post, Long replyCode, @NotNull String replyContent,
			@NotNull String replyDate) {
		super();
		this.user = user;
		this.post = post;
		this.replyCode = replyCode;
		this.replyContent = replyContent;
		this.replyDate = replyDate;
	}

}
