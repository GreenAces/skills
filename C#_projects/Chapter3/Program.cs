using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter3
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Bike myBike = new Bike(); //initializing Bike class here 
            Console.WriteLine("Initial Speed= " + myBike.getSpeed()); //using get method to access speed of bike
            myBike.setSpeed(23.0f); //using set method to change the speed of the bike (note: decimal requires f handle)
            Console.WriteLine("New Speed= " + myBike.getSpeed());
        }
    }
}
