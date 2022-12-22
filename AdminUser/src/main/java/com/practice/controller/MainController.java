package com.practice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.practice.entity.User;
import com.practice.service.UserService;

@Controller
public class MainController {
	
//	@Autowired
//	private UserService userService;
//	
	@GetMapping("/login")
	public String login() {
		
		return "login";
	}
	//////////////
	
//	@PostMapping("/registeruser")
//	public User registerUser(@RequestBody User user) throws Exception {
//		String email = user.getEmail();
//		if(email !=null && !"".equals(email)) {
//			
//		User userObj =	userService.fetchUserByEmailId(email);
//		
//		if(userObj !=null) {
//			throw new Exception("user with"+email+"already exists");
//		}
//		}
//		
//		User userObj=userService.Save(user);
//		
//		return userObj;
//		
//	}
	
	
	
	
//	// user login api
//	@PostMapping("/loginn")
//	public User loginUser(@RequestBody  User user) {
//		
//		String email = user.getEmail();
//		 String pass=user.getPassword();
//		 User userObj=null;
//		 if(email !=null && pass !=null) {
//			userObj= userService.findByEmailAndPassword(email, pass);
//		 }
//		 
//		 return userObj;
//			 
//	}

	
		

	@GetMapping("/userlogin")
	public String user() {
		
		return "user_login";
	}
	

		
	}

