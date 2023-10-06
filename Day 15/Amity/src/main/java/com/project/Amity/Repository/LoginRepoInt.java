package com.project.Amity.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Amity.Entity.LoginEntity;

@Repository
public interface LoginRepoInt extends JpaRepository<LoginEntity, Integer>{

	

}
