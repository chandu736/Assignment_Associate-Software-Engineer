package com.example.problem3;

import java.util.Scanner;

public class Pangram {
	
	public static boolean isPangram(String s) {
		boolean[] alphabet=new boolean[26];
		for(char c:s.toCharArray()){
			if(Character.isLetter(c)){
				int index=c-'a';
				alphabet[index]=true;
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
		String sentence=sc.nextLine.toLowerCase();
		sc.close();
		
		if(isPangram(sentence)) {
			System.out.println("The sentence is a Pangram.");
		}else {
			System.out.println("The sentence is not a Pangram.");
		}
	}
}
