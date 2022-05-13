package com.siban.back.mypage.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;

import lombok.Builder;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@Entity
@Table
public class Diet {
	
	@Id
	@Column
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long dietCode;

	@NotNull
	@Column
	private LocalDateTime dietRegdate;
	
	
	@PrePersist
	public void createdAt() {
		this.dietRegdate = LocalDateTime.now();
	}
	
	@PreUpdate
	public void createdAt2() {
		this.dietRegdate = LocalDateTime.now();
	}

	
	@Builder
	public Diet(@NotNull long dietCode, @NotNull LocalDateTime dietRegdate) {
		super();
		this.dietCode = dietCode;
		this.dietRegdate = dietRegdate;
	}
	
	
	
}
