package com.siban.back.workout.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.workout.domain.Workout;
import com.siban.back.workout.repository.WorkoutRepository;

@Service
public class WorkoutService {
	
	@Autowired
	WorkoutRepository workoutRepository;
	
	public List<Workout> findAllWorkout() {
		return workoutRepository.findAll();
	}
	
	public List<Workout> findByWorkoutCourse(String workoutCourse) {
		return workoutRepository.findByWorkoutCourse(workoutCourse);
	}
	
	public List<Workout> findByWorkoutGoal(String workoutGoal) {
		return workoutRepository.findByWorkoutGoal(workoutGoal);
	}
	
}
