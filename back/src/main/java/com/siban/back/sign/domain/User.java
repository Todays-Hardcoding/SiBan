package com.siban.back.sign.domain;

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

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Table
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userCode;
	@NotNull
	@Column
	private String userId;
	@NotNull
	@Column
	private String userPw;
	@NotNull
	@Column
	private String userEmail;
	@NotNull
	@Column
	private String userName;
	@NotNull
	@Column
	private String userTel;
	@NotNull
	@Column
	private String userAddr;
	@NotNull
	@Column
	private String userHeight;
	
	@Column
	private String userProfile;

	@NotNull
	@Column
	private String userWeight;
	
	private String userRegDate;

	@PrePersist
	@PreUpdate
	public void createDate() {
	    Date today = new Date();

	    SimpleDateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	    userRegDate = date.format(today);
	}

	@Builder
	public User(Long userCode, @NotNull String userId, @NotNull String userPw, @NotNull String userEmail,
			@NotNull String userName, @NotNull String userTel, @NotNull String userAddr, @NotNull String userHeight,
			String userProfile, @NotNull String userWeight, String userRegDate) {
		super();
		this.userCode = userCode;
		this.userId = userId;
		this.userPw = userPw;
		this.userEmail = userEmail;
		this.userName = userName;
		this.userTel = userTel;
		this.userAddr = userAddr;
		this.userHeight = userHeight;
		this.userProfile = userProfile;
		this.userWeight = userWeight;
		this.userRegDate = userRegDate;
	}








	
}