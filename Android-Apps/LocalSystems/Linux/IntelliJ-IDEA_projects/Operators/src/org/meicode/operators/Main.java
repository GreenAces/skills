package org.meicode.operators;

public class Main {
    public static void main(String[] args) {

        int a = 5;
        int b = 3;

        // The < and > operator

        boolean output = a>b;
        boolean output2 = a<b;

        // The Not equal to operator

        boolean output3 = a!=b;


        // The OR operator
        boolean output4 =  a == 5 || b==2;

        // The AND operator

        boolean output5 =  a == 5 && b==2;

        // Change output here:
        System.out.println(output5);
        System.out.println("------newline----");

        // Conditional statements

        if (a>5) {
            System.out.println("A is greater than 3.");
        }else {
            System.out.println("A is NOT greater than 3.");
        }

        /* What is the difference between the first conditional statement
         * on line 32 and the 2nd statement on line 47? The 2nd statement
         * has many outputs if the condition is true but also has a default
         * condition if the event is false. There's no limit to the 2nd else if
         * statement but you need at least ONE else condition if you proceed.
         */
        System.out.println("------newline----");


        if (a>0) {
            System.out.println("A is positive.");
        }else if (a<0) {
            System.out.println("A is negative.");
        }else {
            System.out.println("A is zero.");
        }

        // The Switch statement
        System.out.println("------newline----");

        //Make sure you add the variable inside the parenthesis for the Switch statement
        //NOTE: variable can also be declared before the switch statement

        switch (a) {

            case 0:

                System.out.println("A is One.");
                break;

            case 1:
                System.out.println("A is Two.");
                break;

            case 2:
                System.out.println("A is Three.");
                break;

            default:
                System.out.println("A is not One, Two, or Three.");
                break;
        }







    }
}
