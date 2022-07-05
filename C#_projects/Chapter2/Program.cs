using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter2
{
     class MainClass
    
    {
        static void Main(string[] args)
        {

            //chapter 2 -- working with string variables 

            //chapter 2 -- working with string variables 
            //string myName = "Corey";
            //int numberOfLetters = myName.Length;

            //Console.WriteLine("There are " + myName.Length + " number of letters in " + myName);

            //string mySentence = "A sentence with the word hello";

            //if (mySentence.IndexOf("Hello") >= 0) Console.WriteLine("Hello is part of the sentence.");

            //else Console.WriteLine("Hello is NOT included in the sentence");

            //if (mySentence.IndexOf("Hi") >= 0) Console.WriteLine("Hi is part of the sentence");

            //else Console.WriteLine("Hi is NOT included in the sentence");

            //string mySentence2 = "This sentence is long and needs to be shorter";
            //string shorterSentence = mySentence2.Substring(0, 14);//Substring method shortens text and starts @ index of 0 before displaying context of new string
            //Console.WriteLine("Output of shorterSentence: " + shorterSentence);

            //string mySentence3 = "This sentence is long and needs to be shorter";
            //string modifiedSentence = mySentence3.Replace("is long", "is way too long");//Replace method replaces string1 with string2
            //string upperCaseSentence = mySentence3.ToUpper();
            //string lowerCaseSentence = mySentence3.ToLower();

            //Console.WriteLine("Output of modifiedSentence: " + modifiedSentence);
            //Console.WriteLine("Output of upperCaseSentence: " + upperCaseSentence);
            //Console.WriteLine("Output of lowerCaseSentence: " + lowerCaseSentence);

            //Working with number variables

            //Random r = new Random();

            //int randomNumber = r.Next(0, 100); //Random methods picks a number between 0 and 100 for the declared variable 

            //if (randomNumber < 70) Console.WriteLine("There was a 70% chance for this number to be displayed");

            //else Console.WriteLine("There was a 30% chance for this number to be displayed");

            //int minimum = Math.Min(2, 3);
            //int maximum = Math.Max(100, 900);

            //Console.WriteLine("The smallest number between 2 and 3 is " + minimum);
            //Console.WriteLine("The greatest number between 100 and 900 is " + maximum);

            //Switch Statements

           

            Console.WriteLine("Please pick your choice 1-3");

            string answer = Console.ReadLine(); //pauses terminal and waits for user input

            int choice = Int32.Parse(answer); //converts string into an integer so that the switch can read it properly


            switch (choice) 
            {

                case 1:
                    Console.WriteLine("You chose 1");

                    break;

                case 2:
                    Console.WriteLine("You chose 2");

                    break;

                case 3:
                    Console.WriteLine("You chose 3");

                    break;

                default:
                    Console.WriteLine("Default option");

                    break;


            }//end of switch statement 

            Console.WriteLine("We have exited the switch statement");












        }//end of void main 


    }//end of main class



}//end of namespace Chapter2
