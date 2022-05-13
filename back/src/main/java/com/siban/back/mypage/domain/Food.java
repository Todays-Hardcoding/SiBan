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
public class Food {
	
	@Id
	@Column
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long foodCode;
	
	@NotNull
	@Column
	private String foodCategory;
	
	@NotNull
	@Column
	private String foodName;
	
	@NotNull
	@Column
	private int foodKcal;
	
	@NotNull
	@Column
	private LocalDateTime foodRegdate;
	
	
	@PrePersist
	public void createdAt() {
		this.foodRegdate = LocalDateTime.now();
	}
	
	@PreUpdate
	public void createdAt2() {
		this.foodRegdate = LocalDateTime.now();
	}

	@Builder
	public Food(@NotNull long foodCode, @NotNull String foodCategory, @NotNull String foodName, @NotNull int foodKcal,
			@NotNull LocalDateTime foodRegdate) {
		super();
		this.foodCode = foodCode;
		this.foodCategory = foodCategory;
		this.foodName = foodName;
		this.foodKcal = foodKcal;
		this.foodRegdate = foodRegdate;
	}
	
	
	
}
