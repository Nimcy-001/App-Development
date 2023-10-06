package com.project.Amity.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Signup")
public class SignupEntity {
	@Id
	@Column(name="mail")
	private String email;
	@Column(name="username")
	private String username;
	@Column(name="mobileNumber")
	private int mobileNumber;
	@Column(name="password")
	private String password;

	private String fullName;
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(int mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public SignupEntity(String email, String username, int mobileNumber, String password, String fullName) {
		super();
		this.email = email;
		this.username = username;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.fullName = fullName;
	}
	@Override
	public String toString() {
		return "SignupEntity [email=" + email + ", username=" + username + ", mobileNumber=" + mobileNumber
				+ ", password=" + password + ", fullName=" + fullName + "]";
	}
	
}
