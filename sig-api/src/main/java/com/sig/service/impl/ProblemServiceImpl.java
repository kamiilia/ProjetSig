package com.sig.service.impl;

import com.sig.model.Problem;
import com.sig.repository.ProblemRepository;
import com.sig.service.ProblemService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProblemServiceImpl implements ProblemService {

    private final ProblemRepository problemRepository;

    @Override
    public Problem create(Problem problem) {
        return problemRepository.save(problem);
    }

    @Override
    public Problem update(Problem problem) {
        return problemRepository.save(problem);
    }

    @Override
    public Problem findById(Long id) {
        return problemRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Problem> findAll() {
        return problemRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        problemRepository.deleteById(id);
    }
}
