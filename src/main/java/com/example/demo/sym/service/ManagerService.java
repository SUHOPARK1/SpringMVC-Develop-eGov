package com.example.demo.sym.service;

import com.example.demo.sym.service.ManagerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerService {
	
	@Autowired ManagerMapper managerMapper;

    
    public int register(Manager manager) {
    	System.out.println("========== 1 ==========");
    	int a = 1;
    	System.out.println("========== 2 =========="+a);
        return a;
    }

}
