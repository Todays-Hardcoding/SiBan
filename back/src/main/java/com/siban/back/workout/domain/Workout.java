package com.siban.back.workout.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
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
	private String workoutCourse;
	
	@NotNull
	@Column
	private String workoutGoal;
	
	@NotNull
	@Column
	private String workoutTarget;
	
	@NotNull
	@Column
	private String workoutDescription;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date workoutRegdate;
	
	/*
	 * @PrePersist public void createdAt() { this.workoutRegdate =
	 * LocalDateTime.now(); }
	 * 
	 * @PreUpdate public void updatedAt() { this.workoutRegdate =
	 * LocalDateTime.now(); }
	 */

	@Builder
	public Workout(@NotNull long workoutCode, @NotNull String workoutName, @NotNull String workoutCourse,
			@NotNull String workoutGoal, @NotNull String workoutTarget, @NotNull String workoutDescription,
			@NotNull Date workoutRegdate) {
		super();
		this.workoutCode = workoutCode;
		this.workoutName = workoutName;
		this.workoutCourse = workoutCourse;
		this.workoutGoal = workoutGoal;
		this.workoutTarget = workoutTarget;
		this.workoutDescription = workoutDescription;
		this.workoutRegdate = workoutRegdate;
	}
	
}
