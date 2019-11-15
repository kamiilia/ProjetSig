package com.sig.controller;

import com.sig.model.Problem;
import com.sig.service.ProblemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class ProblemController {

    private final ProblemService problemService;

    @PostMapping("/problems")
    public Problem createProblem(@Valid @RequestBody Problem problem) {
        return problemService.create(problem);
    }

    @PutMapping("/problems/{id}")
    public Problem updateProblem(@PathVariable Long id, @Valid @RequestBody Problem problem) {
        problem.setId(id);
        return problemService.update(problem);
    }

    @GetMapping("/problems/{id}")
    public Problem getProblemById(@PathVariable Long id) {
        return problemService.findById(id);
    }

    @GetMapping("/problems")
    public List<Problem> getAllProblems() {
        return problemService.findAll();
    }

    @DeleteMapping("/problems/{id}")
    public void deleteProblem(@PathVariable Long id) {
        problemService.delete(id);
    }
}
