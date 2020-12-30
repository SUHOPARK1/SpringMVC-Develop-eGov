package com.example.demo.www.chap02;
import java.util.function.Consumer;
public class AnonyTest {
	public static void main(String... args) {
		// Classic Java
		Person p = new Person();
		System.out.println(p.returnName("박보검"));
		
		
		// Modern Java (Anonymous)
		/* System.out.println(new IPerson() {
			@Override
			public String showName(String name) {
				return name;
			}
		}.showName("이순신")); */
		
		
		// Modern Java (Method Reference)		
		new Log() {
			@Override
			public void print(String msg) {
				Consumer<String> c = System.out::print;
				c.accept(msg);
			}
		}.print(new IPerson() {
			@Override
			public String showName(String name) {
				return name;
			}
		}.showName("김수현"));
	}
}
class Person{
	String name; 
	String returnName(String name) {return name;}
}
interface IPerson{ String showName(String name);}
interface Log{ void print(String msg);}


