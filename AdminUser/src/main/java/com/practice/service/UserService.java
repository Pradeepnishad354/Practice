package com.practice.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.practice.entity.User;
import com.practice.web.dto.UserRegistrationDto;

public interface UserService extends UserDetailsService {
	
	User save(UserRegistrationDto registrationDto);
	
	// save user
//	User Save(User user);
	
	
	List<User> getAllUser();
	
	void deleteById(long id);
	
	User getUserById(long id);
	
	User updateUser(User user);

	
//	 User fetchUserByEmailId(String email);
//	
//	User findByEmailAndPassword(String email,String password);
}
