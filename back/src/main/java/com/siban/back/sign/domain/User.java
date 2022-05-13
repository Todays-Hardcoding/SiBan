package com.siban.back.sign.domain;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Data;

@Data
@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long userCode;
	
	@NotNull
	@Column	
	private final String userId;
	@NotNull
	@Column	
	private final String userName;
	@NotNull
	@Column
	private final String userPassword;
	@NotNull
	@Column
	private final String userEmail;
	@NotNull
	@Column
	private final String userTel;
	@NotNull
	@Column
	private final Date userBirth;
	@NotNull
	@Column
	private final Float userHeight;

	@Column
	private final Float userWeight;

	@Column
	private LocalDateTime userRegDate;
	
	@PrePersist
	public void createDate() {
		this.userRegDate = LocalDateTime.now();
	}

	@Builder
	public User(Long userCode, @NotNull String userId, @NotNull String userName, @NotNull String userPassword,
			@NotNull String userEmail, @NotNull String userTel, @NotNull Date userBirth, @NotNull Float userHeight,
			Float userWeight, LocalDateTime userRegDate) {
		super();
		this.userCode = userCode;
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.userTel = userTel;
		this.userBirth = userBirth;
		this.userHeight = userHeight;
		this.userWeight = userWeight;
		this.userRegDate = userRegDate;
	}

}
