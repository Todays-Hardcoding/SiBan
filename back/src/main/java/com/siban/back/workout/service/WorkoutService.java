package com.siban.back.workout.service;

import java.util.List;
import java.util.Optional;

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
	
	public Workout selectOne(long id) {
		return workoutRepository.getById(id);
	}
}
