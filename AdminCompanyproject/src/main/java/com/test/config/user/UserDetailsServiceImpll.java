
  package com.test.config.user;
  
  import org.springframework.beans.factory.annotation.Autowired;
import
  org.springframework.security.core.userdetails.UserDetails;
import
  org.springframework.security.core.userdetails.UserDetailsService;
import
  org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.test.entity.Company;
import com.test.repository.CompanyRepository;
  
  @Service
  
  public class UserDetailsServiceImpll implements UserDetailsService {
  
  @Autowired 
  private CompanyRepository companyRepository;
  
  @Override public UserDetails loadUserByUsername(String cEmail) throws
  UsernameNotFoundException {
  
  
  Company company=companyRepository.findByUserEmail(cEmail);
  
  if (company!= null) { return new CustomUserDetailss(company); }
  
  throw new UsernameNotFoundException("company user not available"); }
  
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 