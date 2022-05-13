package com.siban.back.workout.domain;

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

@NoArgsConstructor
@Entity
@Table
public class Workout {
	
	@Id
	@NotNull
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long workoutCode;
	
	@NotNull
	@Column
	private String workoutName;
	
	@NotNull
	@Column
	private String workoutCategory;
	
	@Column
	private String workoutPhoto;
	
	@Column
	private String workoutVideo;
	
	@NotNull
	@Column
	private LocalDateTime workoutRegdate;
	
	@PrePersist
	public void createdAt() {
		this.workoutRegdate = LocalDateTime.now();
	}
	
	@PreUpdate
	public void updatedAt() {
		this.workoutRegdate = LocalDateTime.now();
	}

	@Builder
	public Workout(@NotNull long workoutCode, @NotNull String workoutName, @NotNull String workoutCategory,
			String workoutPhoto, String workoutVideo, @NotNull LocalDateTime workoutRegdate) {
		super();
		this.workoutCode = workoutCode;
		this.workoutName = workoutName;
		this.workoutCategory = workoutCategory;
		this.workoutPhoto = workoutPhoto;
		this.workoutVideo = workoutVideo;
		this.workoutRegdate = workoutRegdate;
	}	
}
