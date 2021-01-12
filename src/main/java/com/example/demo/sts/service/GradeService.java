package com.example.demo.sts.service;

import com.example.demo.cmm.utl.DummyGenerator;
import com.example.demo.sts.service.GradeService;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeService {
	@Autowired GradeMapper gradeMapper;
	@Autowired DummyGenerator dummy;
	
	 public void insertMany(int count) {
		 
	    	var list = new ArrayList<Grade>();
	    	Grade g = null;
	    	for(int i = 0; i < 100; i ++) {
	    		g = dummy.makeGrade();
	    		g.setStuNum(i+1);
	    		list.add(g);
	    	}
	    	gradeMapper.insertMany(list);
	    }
}


