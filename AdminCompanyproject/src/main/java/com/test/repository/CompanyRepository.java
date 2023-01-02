package com.test.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.entity.Company;
import com.test.entity.User;

public interface CompanyRepository extends JpaRepository<Company,Integer> {

	@Query("from Company as c where c.user.id=:userId")
	List<Company> findCompanyByUser(@Param("userId")Integer userId);
	
	
//	 @Query("Select cEmail from Company c WHERE c.cEmail=:cEmail")
//	public Company findByUserEmail(@Param("cEmail")String cEmail);
	
	 public Company findByUserEmail(String cEmail);
//	 Company findByEmailAndPassword(String cEmail,String Password); 
	
}
