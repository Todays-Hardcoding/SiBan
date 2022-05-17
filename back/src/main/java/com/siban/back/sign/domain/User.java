package com.siban.back.sign.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

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


}
