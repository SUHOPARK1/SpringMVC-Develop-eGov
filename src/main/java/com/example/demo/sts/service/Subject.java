package com.example.demo.sts.service;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Data @Component
public class Subject {
	private int subNum;
	private String subject, description;

}
