using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter3
{   

    //A class is a bundle of related code
    //It can be used as a blueprint to create objects (OOP)
    public class Bike
    {
        private float speed;
        private int color;
        private static int nbBikes;//private and static means that the methods can be shared across instances of the bike class

        public static void explainWhatAbikeIs() 
        {

            Console.WriteLine("A bike is human-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other");
        }

        public int getNbBikes() //setting getNbBikes to public means that it can be accessed from outside the class (whenever it's called)
        {
            return nbBikes;
        }
        private void increaseNbBikes()  //setting increaseNbBikes to private means that only the bike class has access to this method
        {
            nbBikes++;//adds 1 to the number of bikes 
        
        }

        //Destructors are responsible for when an object is deleted 
        //They must have the same name as a class and is followed by a tilde ~ 
        //NOTE: a destructors can't take parameters nor return a value
        ~Bike() 
        {
            //add some code here


        }//end of destructor

        //default Bike constructor
        public Bike() 
        {

            increaseNbBikes();


        }//end of default Bike constructor  


        //public Bike constructor #1
        public int getColor()
        {

            return color;
        }//end of constructor #1

        //public Bike constructor #2
        public Bike(int newColor)
        {
            //A constructor is created within a class, it can be left empty or deleted.
            //A constructor is a special method that is used to initialize objects.
            //You can think of a contructor as a unique trait that only a particular object can have. (example: class --> person, constructor --> fingerprint)
            //You can have more than 1 contructor to serve different purposes.

            color = newColor;//NOTE: doesn't require this keyword...
            increaseNbBikes();

        }//end of constructor #2


        //public Bike constructor #3
        public Bike(int newColor, float newSpeed) 
        {

            color = newColor;
            speed = newSpeed;
            increaseNbBikes();

        }//end of construtor #3



        public void accelerate() 
        {
            speed++;
        }

        public void turnRight() 
        {
            
        
        }

        private void calculateDistance() 
        {
        
        
        }

        //a get and set method allows you to access and modify data
        public void setSpeed (float newSpeed) 
        {

            speed = newSpeed;
        }

        public float getSpeed() 
        {
            return speed; //(tip) only a get method will require the return keyword

        }

        /* The new way to create a get and set method is as follows:
           
            private floot speed
            public float speed

            {
                get {return speed;}
                set {speed = value;}
            
            }
         
         
         
         */
       

    }//public class Bike

}//end of namespace Chapter3
