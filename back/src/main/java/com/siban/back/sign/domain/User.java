package com.siban.back.sign.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
<<<<<<< HEAD
import javax.validation.Valid;
=======
import javax.persistence.Table;
>>>>>>> 27e59e4345f680ca34b3d372892a6393c5cfe0ee
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@Table
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userCode;

	@NotNull
	@Column
	@Pattern(regexp = "/^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/")
	private String userId;
	@NotNull
	@Column
	private String userPassword;
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
	private String userHeight;

	@NotNull
	@Column
	private String userWeight;
	private LocalDateTime userRegDate;

	@PrePersist
	public void createDate() {
		this.userRegDate = LocalDateTime.now();
	}

	@Builder
	public User(Long userCode, @NotNull String userId, @NotNull String userPassword, @NotNull String userEmail,
			@NotNull String userName, @NotNull String userTel, @NotNull String userHeight, @NotNull String userWeight,
			LocalDateTime userRegDate) {
		super();
		this.userCode = userCode;
		this.userId = userId;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.userName = userName;
		this.userTel = userTel;
		this.userHeight = userHeight;
		this.userWeight = userWeight;
		this.userRegDate = userRegDate;
	}

}
