package com.example.demo.cmm.utl;

import static com.example.demo.cmm.utl.Util.*;

import java.util.function.BiFunction;

public class DummyGenerator {
	/* 1970~2000년 사이의 랜덤한 연도수 뽑기 */
	public String makeYear(int from, int to) {
		BiFunction<Integer, Integer, String> f = 
				(a, b) -> String.valueOf((int)(Math.random() * (b-a)) + a);
				return f.apply(from, to);
				
		// 람다로 바꾸는 과정 - 연습중...		
		// public String makeYear() {
		// return String.valueOf((int)(Math.random() * (2000-1970)) + 1970);}
	
		// 1. BiFunction<T, U, R> f = (T, U ) - > R
		// 2. BiFunction<Integer, Integer, String> f = (String, Integer) -> R
		// 3. BiFunctio<Integer, Integer, String> f = (a,b) -> String.valueOf((int)(Math.random() * (200-1970))) + 1970;
		
		 
	}
	/* 1~12 사이의 랜덤한 월 뽑기 */
	public String makeMonth() {
		return "";
	}
	/* 2월이면 28, 20일 (윤년)이고 
	 * 1, 3, 5, 7, 8, 10, 12 이면 1 ~ 31일
	 * 4, 6, 9, 11 이면 1~30일 중 하루 랜덤 생성
	 */
	public String makeDay() {
		
		return makeMonth() + "-" + "";
	}
	 public String makeBirthday() {
		 return makeYear() + "-" + makeDay();
	 }
	
	
	
	
}
