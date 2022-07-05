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

            //single-dimensional Arrays

            string[] names;

            //names[0] = "Paul"; index always starts at zero
            //names[1] = "Mary"; names[2] = "Pat"; You can list names like this one by one... OR...
            //You can create them all at one time as displayed below

            names = new string[10] {"Paul","Mary", "John","Mark", "Eva", "Pat", "Sinead", "Elma", "Flaithri", "Eleanor",};


            //calling method from main class
            // arrayExample();

            //Sorting the array

            /* <== remove tag here 

            string[] test = {"Noemy", "Alan", "John"};
            Console.WriteLine("First Element before sort: " + test[0]);
            Array.Sort(test); //Sort method sorts the first letter of each name
            Console.WriteLine("First Element after sort: " + test[0]);

            int[] test2 = {8, 6, 9, 4, 7};
            Console.WriteLine("First Element before sort: " + test2[0]);
            Array.Sort(test2); //Sort method sorts the first smallest number
            Console.WriteLine("First Element after sort: " + test2[0]);

             and remove tag here == > */

            //Multidimensional arrays

            //you can them like this:
            //int apt0_1 = 0;
            //int apt0_2 = 0;

            //or create them like this:
            //int[,] apArray = new int[10, 10];

            //apArray[0, 1] = 0;
            //apArray[0, 2] = 0;

            //Console.WriteLine(apArray[0,1]);

            //Loops

            //int counter = 0;

            //while (counter <= 10) //This loop will execute code in between the brackets repetitively until a condition is met (i.e counter is less than 10)

            /* comment out tag starts here 

            {
                counter++; //increase counter by 1

                Console.WriteLine("Counter has a value of " + counter);
            }

            int player1HP = 0;
            //When the condition is met the code will be executed the # of times the variable is specified - almost like an if statement but without having to write it so many times

            do

            {
                player1HP++;

                Console.WriteLine("Make AI attack player1"); 

            } while (player1HP <= 10);


            //for loop without array 

            for (int counter2 = 0; counter2 <= 10; counter2++) 
            
            {

                Console.WriteLine("Counter = " + counter2);
            }

            comment out tag ends here */


            //calling out selectChoice method from main class
            //selectChoice();


            //calling out useConstants method from main class
            //useConstants();

            //1 more example of constants with floats (decimals)
            //(tip) you decrease the probability of errors when you use constants for calculations 

            //const float VAT_RATE = 0.21f;
            //float priceBeforeVat = 23.0f;
            //float priceAfterVat = priceBeforeVat * VAT_RATE;

            //Console.WriteLine("VAT RATE before: " + priceBeforeVat);
            //Console.WriteLine("VAT RATE after: " + priceAfterVat);

            //calling myQuiz method from main (challenge#1)
            myQuiz();





























        }//end of void main 

        //mini math quiz using array example

        public static void arrayExample() 
        
        {
            int score = 0;
            string[] questions = {"What is 2+2" , "What is 4+2", "What is 4+5" };
            int[] correctAnswers = { 4, 6, 9 };

            for (int i = 0; i < 3; i++) //the for loop cycles through the questions and correctAnswers array using variable i
            {

                Console.WriteLine("Question " +i+ " : " + questions[i]);

                int answer = Int32.Parse(Console.ReadLine());

                if (answer == correctAnswers[i]) 
                {

                    Console.WriteLine("Well done!");

                    score++; //adds 1 to score

                } 

                else Console.WriteLine("Sorry, wrong answer...");

            
            }//end of for loop


            Console.WriteLine("You answered " + score + " questions correctly");


        }//end of arrayExample method 


        public static void selectChoice() 
        
        {

            int myChoice = 0;

            do 
            {

                Console.WriteLine("Please enter your choice 1 - 3");
                string answer = Console.ReadLine();

                myChoice = Int32.Parse(answer);
            
            } while (myChoice < 1 || myChoice > 3);

                Console.WriteLine("Thank you");
        
        }//end of selectChoice method 

        public static void useConstants() 
        
        {
            //Constants
            //constants allow you to easily remember variables that you know will stay the same in your application
            //constants should always be written in ALL CAPS

            const int CHOICE_RESTART = 0;
            const int CHOICE_STOP = 1;
            const int CHOICE_PAUSE = 2;

            int userChoice = 2;

            if (userChoice == CHOICE_RESTART) Console.WriteLine("you decided to restart the game");

            if (userChoice == CHOICE_STOP) Console.WriteLine("you decided to stop the game");

            if (userChoice == CHOICE_PAUSE) Console.WriteLine("you decided to pause the game");


        }//end of useConstants method 

        public static void myQuiz() 
        {

            string[] myQuestions = new string[10] {"What is 2x1", "What is 2x2", "What is 2x3 =", "What is 3x1", "What is 3x2", "What is 3x3", "What is 4x1", "What is 4x2", "What is 4x3", "What is 5x1" };
            int[] myAnswers = new int[10] {2,4,6,3,6,9,4,8,12,5 };
            int score = 0;

            Console.WriteLine("Please answer the following 10 questions below to complete the quiz:");

            for (int i = 0; i < 10; i++) 
            
            {
                Console.WriteLine("Question " + i + " : " + myQuestions[i]);
                int userInput = Int32.Parse(Console.ReadLine());

                if (userInput == myAnswers[i])

                {
                    Console.WriteLine("Good!");
                    score++;
                }
                else Console.WriteLine("Nope, that's not the correct answer...");
            }

            Console.WriteLine("Quiz is complete -- you answered " + score + " questions correctly.");
        
        }//end of myQuiz method 


    }//end of main class



}//end of namespace Chapter2
