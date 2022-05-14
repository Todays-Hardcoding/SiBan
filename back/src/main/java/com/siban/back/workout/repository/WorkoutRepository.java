package com.siban.back.workout.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.workout.domain.Workout;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {

}
