package com.sig.service;

import com.sig.model.User;

import java.util.List;

public interface UserService {
    User create(User user);
    User update(User user);
    User findById(Long id);
    List<User> findAll();
    void delete(Long id);
}
