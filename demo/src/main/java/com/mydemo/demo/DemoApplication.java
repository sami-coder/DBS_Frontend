package com.mydemo.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import static org.mockito.Mockito.mock;
import org.mockito.Mockito;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		demomock mockeddemo = mock(demomock.class);
	}

}
