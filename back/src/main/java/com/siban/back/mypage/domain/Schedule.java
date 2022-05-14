package com.siban.back.mypage.domain;

import java.time.LocalDateTime;

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
import lombok.NoArgsConstructor;

@Entity
@Table
@NoArgsConstructor
public class Schedule {
	
	@Id
	@NotNull
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long scheduleCode;
	
	@NotNull
	@Column
	private LocalDateTime scheduleDate;
	
	@PrePersist
	public void createdAt() {
		this.scheduleRegdate = LocalDateTime.now();
	}
	
	@PreUpdate
	public void updateAt() {
		this.scheduleRegdate = LocalDateTime.now();
	}
	
	@NotNull
	@Column
	private LocalDateTime scheduleRegdate;
	
	@Builder
	public Schedule(@NotNull long scheduleCode, @NotNull LocalDateTime scheduleDate,
			@NotNull LocalDateTime scheduleRegdate) {
		super();
		this.scheduleCode = scheduleCode;
		this.scheduleDate = scheduleDate;
		this.scheduleRegdate = scheduleRegdate;
	}	

}
