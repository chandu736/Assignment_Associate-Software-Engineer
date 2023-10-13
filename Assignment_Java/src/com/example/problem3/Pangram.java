package com.example.problem3;

import java.util.Scanner;

public class Pangram {
	
	public static boolean isPangram(String s) {
		boolean[] alphabet=new boolean[26];
		s=s.toLowerCase();
		for(int i=0;i<s.length();i++) {
			char ch=s.charAt(i);
			if(ch>='a' && ch<='z') {
				alphabet[ch-'a']=true;
			}
		}
		for(boolean letter:alphabet) {
			if(!letter) {
				return false;
			}
		}
		return true;
	}
	
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a sentence : ");
		String sentence=sc.nextLine();
		sc.close();
		
		if(isPangram(sentence)) {
			System.out.println("The sentence is a Pangram.");
		}else {
			System.out.println("The sentence is not a Pangram.");
		}
	}
}
