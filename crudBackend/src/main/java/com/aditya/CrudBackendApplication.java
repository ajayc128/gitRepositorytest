package com.aditya;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.aditya.entity.User;
import com.aditya.repositories.UserRepository;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(CrudBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("aditya"));
		userRepository.save(new User("vivek"));
		userRepository.save(new User("lovely"));

	}

}
