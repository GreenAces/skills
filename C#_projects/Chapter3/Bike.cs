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

        public Bike()
        {
            //a constructor is created within a class, it can be left empty or deleted.
            //A constructor is a special method that is used to initialize objects.
            //You can think of a contructor as a unique trait that only that particular object can have. (example: class --> person, constructor --> fingerprint ID)

        }//public Bike constructor

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
