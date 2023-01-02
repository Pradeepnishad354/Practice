package com.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.entity.Company;
import com.test.entity.User;



public interface UserRepository extends JpaRepository<User,Integer> {
	
	public boolean existsByEmail(String email);
    
	public User findByEmail(String email);

//	public void save(Company company);
}
