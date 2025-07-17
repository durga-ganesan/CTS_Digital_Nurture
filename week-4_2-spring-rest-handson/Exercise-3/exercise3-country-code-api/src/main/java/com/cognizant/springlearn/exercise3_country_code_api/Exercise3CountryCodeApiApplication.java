package com.cognizant.springlearn.exercise3_country_code_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:applicationContext.xml")
public class Exercise3CountryCodeApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(Exercise3CountryCodeApiApplication.class, args);
    }
}
