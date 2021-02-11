package com.example.demo.itm.controller;

import java.io.File;
import java.io.IOException;
import java.net.http.HttpRequest;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.example.demo.itm.domain.UploadFile;
import com.example.demo.sec.mapper.AuthMapper;
import com.example.demo.uss.domain.Manager;
import com.example.demo.uss.domain.Student;
import com.example.demo.uss.domain.Teacher;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class FileController {
	@PostMapping("/fileupload/image")
	public Map<String, Object> fileUpload(MultipartHttpServletRequest request) {
		System.out.println("$$$$$$$$$$$$$$$$$$$$$$");
		MultipartFile mfile = request.getFile("file");
		if (!mfile.isEmpty()) {
			System.out.println("업로드된 파일명: " + mfile.getOriginalFilename());
			File file = new File(
					UploadFile.PATH.toString(),
					mfile.getOriginalFilename());
			try {
				mfile.transferTo(file);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}
}
