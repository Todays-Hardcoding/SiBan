package com.siban.back.workout.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.siban.back.workout.domain.Workout;
import com.siban.back.workout.service.WorkoutService;

@RestController
public class WorkoutController {
	
	@Autowired
	WorkoutService workoutService;
	
	@GetMapping("/FindAll.act")
	public List<Workout> findAllWorkout() {
		return workoutService.findAllWorkout();
	}
	
	@PostMapping("/Course.act")
	public List<Workout> findByWorkoutCourse(@RequestBody Map<String, String> params) {
		List<Workout> result = new ArrayList<>();
		result = workoutService.findByWorkoutCourse(params.get("workoutCourse"));
		return result;
	}
	
	@PostMapping("/Goal.act")
	public List<Workout> findByWorkoutGoal(@RequestBody Map<String, String> params) {
		List<Workout> result = new ArrayList<>();
		result = workoutService.findByWorkoutGoal(params.get("workoutGoal"));
		return result;
	}
	
	@PostMapping("/addPlan.act")
	public void insertRoutine(@RequestBody Map<String, Workout[]> params) {
		if(params.get("plans") != null) {
			System.out.println(params.get("plans"));
		}
		System.out.println("=================");
		System.out.println(params.get("plans"));
	}

}
