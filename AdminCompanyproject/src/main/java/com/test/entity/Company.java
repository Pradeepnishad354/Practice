package com.test.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name="User")
public class Company {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String cName;
	
	private String cEmail;
	
	private String  cAddress;
	
	
	private String type;
	
	private String  Password;
	
	@ManyToOne
	private User user;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getcEmail() {
		return cEmail;
	}

	public void setcEmail(String cEmail) {
		this.cEmail = cEmail;
	}

	public String getcAddress() {
		return cAddress;
	}

	public void setcAddress(String cAddress) {
		this.cAddress = cAddress;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

//	public Company(int id, String cName, String cEmail, String cAddress, String type, User user) {
//		super();
//		this.id = id;
//		this.cName = cName;
//		this.cEmail = cEmail;
//		this.cAddress = cAddress;
//		this.type = type;
//		this.user = user;
//	}

	public Company(int id, String cName, String cEmail, String cAddress, String type, String password, User user) {
		super();
		this.id = id;
		this.cName = cName;
		this.cEmail = cEmail;
		this.cAddress = cAddress;
		this.type = type;
		Password = password;
		this.user = user;
	}

	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
	
}
