package com.project.Amity.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.Amity.Entity.SignupEntity;
import com.project.Amity.Repository.SignupRepoInt;


public class SignupService implements SignupServiceInt{
	@Autowired
	private SignupRepoInt sr;
	@Override
	public List<SignupEntity> getSignupDetails() {
		return sr.findAll();
	}

	

}
