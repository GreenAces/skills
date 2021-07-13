package org.meicode.arrays;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        /* To store a list of variables, we use arrays.
         * Different types of arrays include: array of strings,
         * array of images, arrays of sounds, array of numbers, etc...
         * NOTE: Arrays are objects and their indexes start with 0.
         * WARNING: The arrays below have a size limit of 5. Therefore
         * No further contents can be added unless you increase the array size.
         * Date: 7/13/2021
         * Video paused at 2:27:00
         * Next Lesson is object oriented programming
         */

        String [] students = new String[5];
        students [0] = "Kevin";
        students [1] = "Samantha";
        students [2] = "James";
        students [3] = "Jasmine";
        students [4] = "Alfred";

        System.out.println("Array of students has " + students[0] +" as a student.");
        System.out.println("-----------------------");

        int [] classroom = new int[5];

        classroom [0] = 103;
        classroom [1] = 232;
        classroom [2] = 330;
        classroom [3] = 442;
        classroom [4] = 506;

        System.out.println(students[0] + " is in classroom " +  classroom[0] + ".");
        System.out.println("-----------------------");

        // Note: This is an alternative way to create an array of strings or numbers.

        String [] names = {"Mesiam", "Sarah", "Tom", "Brad","Brian"};
        int [] numbers = {54212341,7439752,1234456,8633455,1345657};
        for (int x=0; x<names.length; x++) {

            //This for-loop is for testing outcome of the numbers array.
              System.out.println(numbers[x]);

        } // end of for-loop

        System.out.println("--------Test Complete-------");
        System.out.println("Please enter a name from the names array");

        // WARNING: If user enters an invalid name Java will throw and exception (error).
        Scanner scanner = new Scanner(System.in);
        String name = scanner.next();

        for (int x=0;x<names.length;x++) {
            if (name.equals(names[x])) {
                System.out.println(numbers[x]);


            } // end of if statement
        } // end of for-loop







    } // end of public static void tag
} // end of public class tag
