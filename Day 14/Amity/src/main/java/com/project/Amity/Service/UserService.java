package com.project.Amity.Service;

import java.util.List;

import com.project.Amity.dto.request.UserRequest;
import com.project.Amity.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}