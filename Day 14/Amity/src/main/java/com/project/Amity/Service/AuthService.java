package com.project.Amity.Service;

import com.project.Amity.dto.request.AuthenticationRequest;
import com.project.Amity.dto.request.RegisterRequest;
import com.project.Amity.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}