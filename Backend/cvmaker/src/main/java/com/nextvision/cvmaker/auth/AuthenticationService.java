package com.nextvision.cvmaker.auth;

import com.nextvision.cvmaker.email.EmailService;
import com.nextvision.cvmaker.email.EmailTemplateName;
import com.nextvision.cvmaker.role.RoleRepository;
import com.nextvision.cvmaker.security.JwtService;
import com.nextvision.cvmaker.user.Token;
import com.nextvision.cvmaker.user.TokenRepository;
import com.nextvision.cvmaker.user.User;
import com.nextvision.cvmaker.user.UserRepository;
import io.jsonwebtoken.Jwt;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final EmailService emailService;
    private final AuthenticationManager authenticateManager;
    private final JwtService jwtService;

    @Value("${application.mailing.frontend.activation-url}")

    private String activationUrl;
    public void register(RegistrationRequest request) throws MessagingException {
        var userRole = roleRepository.findByName("USER")
                .orElseThrow(()->new IllegalArgumentException("ROLE USER was not initialized"));
        var user = User.builder()
                .firstname(request.getFirstName())
                .lastname(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(userRole))
                .build();
        userRepository.save(user);
        sendValidationEmail(user);
    }

    private void sendValidationEmail(User user) throws MessagingException {
        var newToekn = generateAndSaveActivationToken(user);

        // send email
        emailService.sendEmail(
                user.getEmail(),
                user.getFullName(),
                EmailTemplateName.ACTIVATE_ACCOUNT,
                activationUrl,
                newToekn,
                "Account activation"
        );


        
    }

    private String generateAndSaveActivationToken(User user) {
        //generate token
        String generatedToekn = generateAndSaveActivationCode(6);

        var token = Token.builder()
                .token(generatedToekn)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build()
                ;
        tokenRepository.save(token);
        return generatedToekn;
    }

    private String generateAndSaveActivationCode(int length) {
        String  characters ="0123456789";
        StringBuilder codeBuilder = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for (int i =0;i<length;i++){
                int randomIndex= secureRandom.nextInt(characters.length()); // 0..9
            codeBuilder.append(characters.charAt(randomIndex));
        }
        return codeBuilder.toString();
    }


    public AuthenticationResponse authenticate(AuthnticationRequest request) {
        var auth = authenticateManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var claims = new HashMap<String, Object>();
        var user  = ((User)auth.getPrincipal());
        claims.put("fullName",user.getFullName());
        var jwtToken = jwtService.generateToekn(claims,user);
        return AuthenticationResponse.builder()
                .token(jwtToken).build();
    }
    //@Transactional
    public void activateAccount(String token) throws MessagingException {
        Token savedToken=tokenRepository.findByToken(token)
                .orElseThrow(()->new RuntimeException("Invalid Token as a message"));
        if(LocalDateTime.now().isAfter(savedToken.getExpiresAt())){
            sendValidationEmail(savedToken.getUser());
            throw new RuntimeException("Activation Token has expired. A new Token has been sent");
        }else {
            var user = userRepository.findById(savedToken.getUser().getId())
                    .orElseThrow(()->new UsernameNotFoundException("User not found"));
            user.setEnabled(true);
            userRepository.save(user);
            savedToken.setValidatedAt(LocalDateTime.now());
            tokenRepository.save(savedToken);
        }

    }
}
