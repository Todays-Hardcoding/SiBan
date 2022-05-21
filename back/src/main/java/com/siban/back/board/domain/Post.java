package com.siban.back.board.domain;

import java.time.LocalDateTime;
import java.text.SimpleDateFormat;
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
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.siban.back.sign.domain.User;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
public class Post {
	@NotNull
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name="userId")
	private User user;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
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
	public void createdAt() {
		this.postViews = 0;
	    Date today = new Date();

	    SimpleDateFormat date = new SimpleDateFormat("yyyy/MM/dd");
	    postRegDate = date.format(today);
	}

	@Override
	public String toString() {
		return "Post [user=" + user + ", postCode=" + postCode + ", postCategory=" + postCategory + ", postTitle="
				+ postTitle + ", postContent=" + postContent + ", postRegDate=" + postRegDate + ", postViews="
				+ postViews + "]";
	}

}
