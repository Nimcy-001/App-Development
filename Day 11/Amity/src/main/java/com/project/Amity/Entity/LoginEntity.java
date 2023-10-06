package com.project.Amity.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class LoginEntity {
	@Id
	@Column(name="email")
	private String email;
	@Column(name="lpassword")
	private String lpassword;
	@Override
	public String toString() {
		return "LoginEntity [email=" + email + ", lpassword=" + lpassword + "]";
	}
	public LoginEntity(String email, String lpassword) {
		super();
		this.email = email;
		this.lpassword = lpassword;
	}
	public LoginEntity() {
		super();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLpassword() {
		return lpassword;
	}
	public void setLpassword(String lpassword) {
		this.lpassword = lpassword;
	}
	public void setId(int id) {
		
		
	}
	
}
