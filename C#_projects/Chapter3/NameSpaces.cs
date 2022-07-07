using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Chapter3
{
    public class NameSpaces
    {
        public NameSpaces()
        {

        }//default constructor 

    }//end of NameSpaces

}//end of namespace Chapter3
namespace NameSpace1
{
    public class MyClass
    {
        public static int add(int a, int b)
        {
            return (a + b);
        }

    }//end of MyClass

}//end of namespace NameSpace1

namespace NameSpace2
{
    public class MyClass
    {
        public static int add(int a, int b, int c)
        {
            return (a + b + c);
        }

    }//end of MyClass

}//end of namespace NameSpace2
