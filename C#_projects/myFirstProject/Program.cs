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
           int dateOfBirth = 1987;
           int currentYear = 2022; // the year needs no decimals and is declared as an integer 
           int age = currentYear - dateOfBirth;
           float temp = 86.5f; //the temp is declared as a float (i.e.. with decimals NOTE-- it needs the "f" at the end)

           int myAge = calculateAge(1990);

          Console.WriteLine("My age is " + myAge);

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


   
      



          


       


        }



 
        //calling a method with a parameter via the main function 

        public static int calculateAge (int yearOfBirth)
        {
            return (2018 - yearOfBirth);
        }


        //creating methods outside of the main function 

        public int myVar;

        public void method1() 

        {
            myVar = 0;
        }


        public void method2() 
        {

            myVar = + 1;

            
        }

       

    }
}
