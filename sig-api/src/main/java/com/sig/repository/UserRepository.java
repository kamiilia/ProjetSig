package com.sig.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sig.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
