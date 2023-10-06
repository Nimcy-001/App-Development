package com.project.Amity.Service;

import java.util.List;

import com.project.Amity.Entity.LoginEntity;

public interface LoginServiceInt {
	public List<LoginEntity> getLoginDetails();
	public void postData(LoginEntity le);
	public void update(LoginEntity le);
	public void delete(int id);
}
