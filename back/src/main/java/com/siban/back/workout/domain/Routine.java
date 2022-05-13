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
public class Routine {

	@Id
	@NotNull
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long routineCode;
	
	@NotNull
	@Column
	private String routineName;
	
	@NotNull
	@Column
	private String routineDefficulty;
	
	@NotNull
	@Column
	private LocalDateTime routineRegdate;
	
	@NotNull
	@Column
	private boolean routineDone;
	
	@PrePersist
	public void createdAt() {
		this.routineRegdate = LocalDateTime.now();
	}
	
	@PreUpdate
	public void updatedAt() {
		this.routineRegdate = LocalDateTime.now();
	}

	@Builder
	public Routine(@NotNull long routineCode, @NotNull String routineName, @NotNull String routineDefficulty,
			@NotNull LocalDateTime routineRegdate, @NotNull boolean routineDone) {
		super();
		this.routineCode = routineCode;
		this.routineName = routineName;
		this.routineDefficulty = routineDefficulty;
		this.routineRegdate = routineRegdate;
		this.routineDone = routineDone;
	}
}
