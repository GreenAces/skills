package org.meicode.loops;

import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // The general for loop tutorial
        /* This for loop creates a variable "i" and begins
         * with a value of 1, but increases its value by 1
         * the loop will stop when "i" is 10.
         * NOTE: Loops are great for repetitive task in your code.
         */


        for (int i = 1; i < 11; i++) {

            System.out.println(i);
        } // end of while-loop

        System.out.println("----------------------");
            // slight change for while-loop

            int a =5;
            String repeat="STOP!";
            for (int x = 0; x < a; x++) {
                System.out.println(repeat);
            } // end of while loop

            //General while-loop tutorial
            /*Tip: You can avoid being stuck in an infinite loop by
             * changing the value of c within the while loop
             */

            double c=6.2;
            while (c<10.2) {
                System.out.println("C is 6.2");
                c++; // change value of c

            } //end of while-loop

            //Slight change in while-loop
            /* This while-loop will break out of the loop if the conditional
             * statement is true and it will continue until the value
             * of c is changed within the while-loop.
             */
         System.out.println("----------------------");
            int b = 10;
            while (b<20) {

                //NOTE: change value before the if statement
                b++;
                System.out.println("B is currently "+b);

                if (b==12) {
                    System.out.println("I only care when B is 12");

                    continue;
                } // end of if statement


            } // end of while-loop

        System.out.println("----------------------");

            //General do-while loop
            String txt = "I'm doing something...";

            do {
                System.out.println(txt);
            }while (b<20);

        System.out.println("----------------------");

        //How to generate random number:
        System.out.println("----------------------");

        Random random = new Random();
        int number = random.nextInt( 20);

        System.out.println("Random Number: "+ number);

        // Example of a terminal program:

        System.out.println("Please enter a number.");
        Scanner scanner = new Scanner (System.in);
        int answer = scanner.nextInt();
        System.out.println("Answer was: "+ answer);




        } // public static void method ends here

    } // Main tag ends here


