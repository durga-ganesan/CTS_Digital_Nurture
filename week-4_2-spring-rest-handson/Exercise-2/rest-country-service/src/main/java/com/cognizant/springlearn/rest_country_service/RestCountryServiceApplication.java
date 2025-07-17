package com.cognizant.springlearn.rest_country_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource({"classpath:applicationContext.xml"})
public class RestCountryServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(RestCountryServiceApplication.class, args);
	}
}
