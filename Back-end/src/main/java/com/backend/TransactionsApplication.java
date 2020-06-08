package com.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@AutoConfigurationPackage
public class TransactionsApplication {
	public static void main(String[] args) {
		SpringApplication.run(TransactionsApplication.class);
	}

}
