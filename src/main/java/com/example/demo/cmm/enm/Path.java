package com.example.demo.cmm.enm;

public enum Path {
	DEFALUT_PORFILE;
	@Override
	public String toString() {
		String result="";
		switch (this) {
		case DEFALUT_PORFILE:
			result ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuZGp08DDSD0P3PMfKSbbPu2nVmJdH74gHg&usqp=CAU";
			break;

		default:
			break;
		}
		return result;
	}
}
