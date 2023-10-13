package com.example.problem2;

import java.util.Scanner;

public class RomanToInteger {
	
	public static int romanToInteger(String s) {
		int result=0;
		int prevValue=0;
		for(int i=s.length()-1;i>=0;i--) {
			char currChar=s.charAt(i);
			int currValue=romanCharToInt(currChar);
			if(currValue<prevValue) {
				result-=currValue;
			}else {
				result+=currValue;
			}
			prevValue=currValue;
		}
		return result;
	}
	
	public static int romanCharToInt(char c) {
		switch(c) {
		case 'I' : return 1;
		case 'V' : return 5;
		case 'X' : return 10;
		case 'L' : return 50;
		case 'C' : return 100;
		case 'D' : return 500;
		case 'M' : return 1000;
		default:
			throw new IllegalArgumentException("Invalid Roman numeral character : "+c);
		}
	}
	
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a Roman numeral : ");
		String romanNumeral=sc.nextLine().toUpperCase();
		sc.close();
		try {
			int ans=romanToInteger(romanNumeral);
			System.out.println("Integer Value : "+ans);
		}catch(IllegalArgumentException e) {
			System.out.println("Invalid roman numeral input. Enter Valid Roman numeral");
		}
	}
}
