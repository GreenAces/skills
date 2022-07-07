using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter3
{
    internal class Vehicle
    {

        private int nbWheels;
        protected float speed;
        private int nbPassengers;
        private int color;

        public void decelerate() 
        {
            speed--;//decreases speed by 1
        }

        public void decelerate(float decrease) 
        {
            speed -= decrease;
        }

        //NOTE: Although decelerate() have the name, they can be told apart because of the parameters list (i.e., the number and the types of the parameters).
        public void displaySpeed() 
        {

            Console.WriteLine("Speed: " + speed);

        }

        public virtual void accelerate() 
        {

            speed++;
        }

        public Vehicle()
        {
            speed = 0;
            nbWheels = 2;
            nbPassengers = 2;



        }//end of default Vehicle constructor


    }//end of class Vehicle


}//end of namespace chapter3
