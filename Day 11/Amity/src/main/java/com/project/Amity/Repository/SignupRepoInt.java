package com.project.Amity.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Amity.Entity.SignupEntity;

public interface SignupRepoInt extends JpaRepository<SignupEntity, String> {

}
