
package com.test.config.user;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.test.entity.Company;

public class CustomUserDetailss implements UserDetails {

	@Autowired
	private Company company;

	public CustomUserDetailss(Company company) {

		super();
		this.company = company;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		return null;
	}

	@Override
	public String getPassword() { // TODO Auto-generated method stub
		return company.getPassword();
	}

	@Override
	public String getUsername() { // TODO Auto-generated method stub
		return company.getcEmail();
	}

	@Override public boolean isAccountNonExpired() { // TODO Auto-generated
   return true;
   }

	@Override public boolean isAccountNonLocked() { // TODO Auto-generated method
  return true; 
  }

	@Override public boolean isCredentialsNonExpired() { // TODO Auto-generated
  return true;
  }

	@Override
	public boolean isEnabled() { // TODO Auto-generated method stub
		return true;
	}

}
