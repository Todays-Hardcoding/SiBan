package com.siban.back.workout.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.workout.domain.Routine;

@Repository
public interface RoutineRepository extends JpaRepository<Routine, Long>{

}
