using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter3
{
    internal class MotoredVehicle : Vehicle //MotoredVehicles inherits properties from Vehicle
    {

        private float engineSize;
        private int petrolType;
        private float petrolLevels;

        public MotoredVehicle() : base()//base implies that MotoredVehicles also has the default constructor for the Vehicles class
        {
            engineSize = 2;
            petrolType = 0;
            petrolLevels = 100;

        }//end of default constructor

        //constuctor#1 does the samething as the default constructor but with the addition of parameters
        //constuctor#1
        public MotoredVehicle(float newEngineSize, int newPetrolType, int newPetrolLevels) : base() 
        {
        
        
        
        }//end of constructor #1

        public void fillUpTank() 
        {
            petrolLevels += 10; //adds 10 to petroLevels
        }

        public override void accelerate() 
        {
            speed += 10; //adds 10 to speed
        
        }


    }//end of MotoroedVehicle class


}//endof namespace Chapter3
