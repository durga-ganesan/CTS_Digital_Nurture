package com.cognizant.spring_learn_ex2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringLearnEx2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnEx2Application.class, args);
		System.out.println("Spring Boot Application Started");

		displayDate();
	}

	public static void displayDate() {

		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");

		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

		try {
			Date date = format.parse("31/12/2018");
			System.out.println("Parsed Date: " + date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}
}
