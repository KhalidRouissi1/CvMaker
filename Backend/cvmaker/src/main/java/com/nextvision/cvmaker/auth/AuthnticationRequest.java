package com.nextvision.cvmaker.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthnticationRequest {
    @Email(message = "Email is not formatted")
    @NotEmpty(message = "Email is mandtory")
    @NotBlank(message = "Email is mandtory")
    private String email;
    @NotEmpty(message = "Password is mandtory")
    @NotBlank(message = "Password is mandtory")
    @Size(min = 8,message = "Password should be 8 characters long minimum")
    private String password;
}
