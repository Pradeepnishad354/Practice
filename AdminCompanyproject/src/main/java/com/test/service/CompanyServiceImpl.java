
 package com.test.service;
  
  import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import
  org.springframework.stereotype.Service;
  
  import com.test.entity.Company; import com.test.repository.CompanyRepository;
  
  @Service 
  public class CompanyServiceImpl implements CompanyService{
  
  @Autowired
  private CompanyRepository companyRepository;

  @Autowired
  JdbcTemplate jdbcTemplate;
  
  
@Override
public Company validateUser(Company company) {
	
	String sql="select *from company where cemail='"+company.getcEmail() +"' and password='"+company.getPassword();
	
	
	jdbcTemplate.query(sql, new CompanyMapper());
	
	return null;
}
  



  }
  
  
  class CompanyMapper implements RowMapper<Company> {

	  public Company mapRow(ResultSet rs, int arg1) throws SQLException {
	   Company company = new Company();

	   company.setcName(rs.getString("cName"));
	   company.setcEmail(rs.getString("cEmail"));
		company.setcAddress(null);	   
			  
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
	return company;
	   
	   
	   
	   
//	    user.setUsername(rs.getString("username"));
//	    user.setPassword(rs.getString("password"));
//	    user.setFirstname(rs.getString("firstname"));
//	    user.setLastname(rs.getString("lastname"));
//	    user.setEmail(rs.getString("email"));
//	    user.setAddress(rs.getString("address"));
//	    user.setPhone(rs.getInt("phone"));
//
//	    return user;
	  }

	
	}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  




















  
//  @Override public Company findByUserNameAndEmail(String cEmail, String
//  Password) {
//  
//  return companyRepository.findByEmailAndPassword(cEmail,Password); }
  
  
 