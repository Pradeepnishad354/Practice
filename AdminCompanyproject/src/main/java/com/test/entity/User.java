package com.test.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;




@Entity
@Table(name="Company")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String Name;
	
	private String email;
	
	private String address;
	
	private String password;
	
	private String role;

	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY,mappedBy="user",orphanRemoval=true)
  List<Company> co=new ArrayList<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Company> getCo() {
		return co;
	}

	public void setCo(List<Company> co) {
		this.co = co;
	}

	public User(int id, String name, String email, String address, String password, String role, List<Company> co) {
		super();
		this.id = id;
		Name = name;
		this.email = email;
		this.address = address;
		this.password = password;
		this.role = role;
		this.co = co;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


}