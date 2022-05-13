package com.siban.back.sign.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siban.back.sign.domain.User;

@Repository
public interface SignRepository extends JpaRepository<User, Long>{

}
