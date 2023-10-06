package com.project.Amity.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Amity.Entity.LoginEntity;
import com.project.Amity.Repository.LoginRepoInt;
@Service
public class LoginService implements LoginServiceInt {
	@Autowired
	private LoginRepoInt lr;
	@Override
	public List<LoginEntity> getLoginDetails() {
		
		return lr.findAll();
	}
	public void postData(LoginEntity le) {
		lr.save(le);
		
	}
	public void update(LoginEntity le) {
		lr.save(le);
		
	}
	public void delete(int id) {
		lr.deleteById(id);
		
	}
	
	
	

}
