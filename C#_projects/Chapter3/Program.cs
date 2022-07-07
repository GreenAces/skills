using System;
using NameSpace1; //You can specify a different project here so that you an use its properties
using System.Collections.Generic; // List requires this when you import NameSpace1 or an external class file
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter3
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //initializing Bike

            Bike myBike = new Bike(); //initializing the default constructor have no parameters
            Bike myBike2 = new Bike(2); //initializing Bike class using constructor #2 with 1 parameter (newColor)  
            Bike myBike3 = new Bike(10,3); //initializing constructor #3 requires 2 parameters (newColor, newSpeed)

            //Console.WriteLine("Initial Speed= " + myBike.getSpeed());
            //myBike.setSpeed(23.0f);//setting speed using default constructor 
            //Console.WriteLine("New speed = " + myBike.getSpeed());
            //Console.WriteLine("The color of Bike2 is " + myBike2.getColor() + " and its speed is " + myBike2.getSpeed());
            //Console.WriteLine("The color of Bike3 is " + myBike3.getColor() + " and its speed is " + myBike3.getSpeed());
            //Console.WriteLine("Number of Bikes Created: " + myBike.getNbBikes());
            //Bike.explainWhatAbikeIs();


            //initializing MotoredVehicle (example of polymorphism)

            //Vehicle v1 = new Vehicle(); //parent class
            //v1.accelerate();
            //v1.displaySpeed();
            //MotoredVehicle v2 = new MotoredVehicle(); //child class
            //v2.accelerate();
            //v2.displaySpeed();
            //v2.decelerate();
            //v2.decelerate();
            //v2.displaySpeed();
            //v2.decelerate(8);
            //v2.displaySpeed();

            //initializing x (example of dynamic polymorphism)

            //int sum1 = NameSpace1.MyClass.add(1, 2);
            //int sum2 = NameSpace2.MyClass.add(1, 2, 3);
            //Console.WriteLine("Sum1: " + sum1 + " ; Sum2:" + sum2);

            //int sum1 = MyClass.add(1, 2); //notice how you can reference this class -- compare this to line 46
            //Console.WriteLine("Sum1: " + sum1);

            //using List -- like arrays but for large data sets

            List<string> listOfNames = new List<string> ();
            listOfNames.Add("Mary");
            listOfNames.Add("Paul");
            listOfNames.Add("John");
            listOfNames.Add("Zoe");
            listOfNames.Add("Hannah");
            Console.WriteLine("Size of List: " + listOfNames.Count);
            listOfNames.Remove("Paul");
            Console.WriteLine("Size of List after removing Paul: " + listOfNames.Count);

            //using List with Sort method

            Console.WriteLine("List before stort");
            for (int i =0; i < listOfNames.Count; i++) 
            {
                Console.WriteLine(listOfNames[i]);
            }

            listOfNames.Sort();
            Console.WriteLine("List after sort");
            for (int i = 0; i < listOfNames.Count; i++) 
            {
                Console.WriteLine(listOfNames[i]);
            }

            //NOTE: The list has been sorted in alphabetical order, with Hannah becoming the first element instead.

            //Dictionaries -- you can define a dataset with different records and each
            //record is accessible through a key instead of an index
            

            Dictionary<string, Student> students = new Dictionary<string, Student>();
            students.Add("ST123", new Student("Mary", "Black")); //When using the Add method, the first parameter is the key
            students.Add("ST124", new Student("John", "Hennessy"));

            Console.WriteLine("Name of student ST124 is " + students["ST124"].firstName); //Output is John via console.









        }
    }
}
