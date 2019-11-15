package com.sig.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sig.model.Problem;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long>{

}
