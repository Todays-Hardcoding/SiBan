package com.siban.back.workout.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.workout.domain.Workout;
import com.siban.back.workout.service.WorkoutService;

@RestController
public class WorkoutController {
	
	@Autowired
	WorkoutService workoutService;
	
	@GetMapping("/test.act")
	public Map<Long, Workout> findAllWokrout() {
		Map<Long, Workout> result = new HashMap<>();
		for(Workout workout : workoutService.findAllWorkout()) {
			result.put(workout.getWorkoutCode(), workout);
		}
		return result;
	}

}
