package com.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.test.entity.User;
import com.test.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository  userRepository;
	@Override
	public User saveUser(User user) {
		
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		user.setRole("ROLE_ADMIN");
		return userRepository.save(user);
	}
	
	@Override
	public boolean checkEmail(String email) {
		
		return userRepository.existsByEmail(email);
	}
	
	
	

}
