package com.aditya.repositories;

import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aditya.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
