package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);


    private static final String SECRET = "abcdefghijklmnopqrstuvwxyz123456";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("Start /authenticate");
        Map<String, String> response = new HashMap<>();

        try {
            if (authHeader == null || !authHeader.startsWith("Basic ")) {
                throw new RuntimeException("Missing or invalid Authorization header");
            }

            String user = getUserFromHeader(authHeader);
            String token = generateToken(user);
            response.put("token", token);
        } catch (Exception e) {
            response.put("error", e.getMessage());
        }

        LOGGER.info("End /authenticate");
        return response;
    }

    private String getUserFromHeader(String authHeader) {
        String base64 = authHeader.replace("Basic ", "");
        byte[] decodedBytes = Base64.getDecoder().decode(base64);
        String decoded = new String(decodedBytes); // e.g., "user:pwd"
        return decoded.split(":")[0]; // Extract only the username
    }


    private String generateToken(String user) {
        Key key = Keys.hmacShaKeyFor(SECRET.getBytes()); // Must be at least 32 bytes

        return Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000)) // 20 mins
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
}
