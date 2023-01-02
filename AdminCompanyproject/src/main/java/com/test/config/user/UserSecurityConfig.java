
package com.test.config.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity

@Configuration

@Order(2)
public class UserSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	public UserDetailsService getUserDetailsService() {
		return new UserDetailsServiceImpll();
	}

	@Bean
	public DaoAuthenticationProvider getDaoAuthProviderr() {
		DaoAuthenticationProvider daoAuthenticationProviderr = new DaoAuthenticationProvider();
		daoAuthenticationProviderr.setUserDetailsService(getUserDetailsService());
		daoAuthenticationProviderr.setPasswordEncoder(passwordEncoder);

		return daoAuthenticationProviderr;
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.authenticationProvider(getDaoAuthProviderr());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()

				// .antMatchers("/user/").hasRole("USER")

				.antMatchers("/").permitAll().and().formLogin().loginPage("/userlogin")
				.loginProcessingUrl("/login").defaultSuccessUrl("/usershow").and().csrf().disable();
	}

}
