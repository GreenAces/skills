using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace myFirstProject
{
    class MainClass

    {

        static void Main(string[] args)

        {



            string myName = "Robert"; // the text is declared using double quotes
            int dateOfBirth = 1992;
            int currentYear = 2022; // the year needs no decimals and is declared as an integer 
            int age = currentYear - dateOfBirth;
            float temp = 86.5f; //the temp is declared as a float (i.e.. with decimals NOTE-- it needs the "f" at the end)
            int units = 500;    //variable is initialized here instead 
            int pricePerUnit = 4; //variable is initialized here instead 
            


            //creating a method # 1
            int myAge = calculateAge(1992);

            Console.WriteLine("My age is (2) " + myAge);

            Console.WriteLine("My age is " + age); //this is out you output to console using C#

            Console.WriteLine("Please enter your name: ");

            string nameOfUser = Console.ReadLine();

            // if (nameOfUser == myName || nameOfUser == "robert") Console.WriteLine("Hello, Robert");


            //  else (nameOfUser != myName || nameOfUser != "robert") Console.WriteLine("Hello Stranger");


            

            Console.WriteLine("What is 1 + 1");


            //convert string to number 
            String resultAsString = Console.ReadLine();
            int result = Int32.Parse(resultAsString);


            if (result == 2) Console.WriteLine("Well done"); // notice no brackets are needed here 

            else Console.WriteLine("Sorry, wrong answer"); // no brackets are needed here either 


            //myMemberVariable was created with myMethod but it is given a value from the MainClass over here instead:

            myMemberVariable = 1;

            Console.WriteLine("The value of myMemberVariable before calling the method is " + myMemberVariable);

            //calling myMethod from the MainClass over here: Notice how the value is changed. 
            //Conclusion: When calling a function from static void Main(string[] args) it will have higher priority
            //and will be executed first before calling it from a different class
            //(tip) a static method should only call a method that is also static
             myMethod();



            //calling method # 2 here 
            calculatePrice(units,pricePerUnit);


            //calling a method with no parameter via the MainClass #3
            getFullName();




            



        }//void main ends here 




        //creating a method with a parameter via the MainClass #1
        public static int calculateAge(int yearOfBirth)
        {
            return (2022 - yearOfBirth);
        }

        //creating a method with a parameter via the MainClass #2
        public static int calculatePrice (int nbItems, int unitPrice)
        {
            int finalPrice = nbItems * unitPrice;

            Console.WriteLine("The final price is " + finalPrice);
            return (finalPrice);
        }

     

        //creating methods outside of the main function 

        public int myVar;// public local variable can be accessed for methods 1 and 2
        public static int myMemberVariable;


        //new variables created for method #3
        public static string primaryName;
        public static string secondaryName;

        public void method1()

        {
            myVar = 0;
        }


        public void method2()
        {

            myVar = +1;


        }

        public static void myMethod() 
        
        {
            myMemberVariable = 3;
            Console.WriteLine("The value of myMemberVariable is " + myMemberVariable);

            //NOTE: no return key is needed regarding void methods
        }

 

        public static void getFullName()

        {

            Console.WriteLine("Enter your friends first name:");
            primaryName = Console.ReadLine();
            Console.WriteLine("Awesome! Now enter your friends last name:");
            secondaryName = Console.ReadLine();
            Console.WriteLine("Got it! Your friends full name is " + primaryName + " " + secondaryName);
            
            //NOTE: no return key is needed regarding void methods

        }

    

       


       

    }//main class ends here 




}//namespace project ends here 
