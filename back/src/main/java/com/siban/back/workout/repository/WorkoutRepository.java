package com.siban.back.workout.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.workout.domain.Workout;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
	
	public List<Workout> findByWorkoutCourse(String workoutCourse);
	
	public List<Workout> findByWorkoutGoal(String workoutGoal);
}
