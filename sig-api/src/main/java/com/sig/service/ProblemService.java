package com.sig.service;

import com.sig.model.Problem;

import java.util.List;

public interface ProblemService {
    Problem create(Problem problem);
    Problem update(Problem problem);
    Problem findById(Long id);
    List<Problem> findAll();
    void delete(Long id);
}
