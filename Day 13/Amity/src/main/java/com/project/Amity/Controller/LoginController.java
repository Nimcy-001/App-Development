package com.project.Amity.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.Amity.Entity.LoginEntity;
import com.project.Amity.Service.LoginService;
@RestController
public class LoginController {

	@Autowired
	private LoginService ls;
	@GetMapping("/login")
	public List<LoginEntity> getLoginDetails(){
		return ls.getLoginDetails();
	}
	
	@PostMapping("/postlogin")
	public void post(@RequestBody LoginEntity le)
	{
		ls.postData(le);
	}
	@PutMapping("/updatelogin")
	public void update(@RequestBody LoginEntity le,@RequestParam int id)
	{
		le.setId(id); 
		ls.update(le);
	}
	@DeleteMapping("/deletebooks/{id}")
	public void delete(@PathVariable int id)
	{
		ls.delete(id);
	}
}
