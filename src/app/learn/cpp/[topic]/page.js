"use client";
import { useSearchParams } from "next/navigation";

const TOPICS_DATA = {
  basics: {
    topicName: "basics",
    details: "",
    examples: [
      {
        title: "Data Types and Variables:",
        info: `Data types define the nature of data a variable can hold, like integers (int), floating-point numbers (float), characters (char), and booleans (bool).Variables are named memory locations used to store data of a particular data type within a program.
                They provide a way to manipulate data and perform operations on it.
                Example: int age = 25; declares an integer variable named age and assigns it the value 25.`,
        code: ``,
      },
      {
        title: "Constants:",
        info: `Constants are unchangeable values that retain their value throughout the program's execution.
                They are declared using the const keyword to ensure their values remain consistent.
                Constants improve code readability and make code maintenance easier.
                Example: const int MAX_VALUE = 100; declares a constant named MAX_VALUE with a value of 100.`,
        code: ``,
      },
      {
        title: "Arrays:",
        info: `Arrays are collections of elements of the same data type stored in contiguous memory locations.
                Elements are accessed using an index, which starts from 0 and goes up to the array size minus one.
                They provide a way to store and manage multiple related values under a single variable name.
                Example: int numbers[5] = {1, 2, 3, 4, 5};`,
        code: ``,
      },
      {
        title: "Pointers:",
        info: `Pointers are variables that store memory addresses of other variables.
                They allow dynamic memory allocation, indirect data manipulation, and efficient memory usage.
                Pointers can point to variables, arrays, or dynamically allocated memory.
                Example: int *ptr = &num; declares a pointer named ptr that points to the memory address of an integer variable num.`,
        code: ``,
      },
      {
        title: "Loops:",
        info: `Loops enable the repetition of a block of code as long as a specific condition is met.
                for loops have an initialization, condition, and update section; they execute a block of code a defined number of times.
                while loops continue execution as long as a condition remains true.
                do-while loops ensure execution of the block at least once before checking the condition.`,
        code: `for (int i = 0; i < 5; i++) {
                    // Code to repeat
                }
                `,
      },
      {
        title: "Operators:",
        info: `Operators perform various operations on variables and values.
                Arithmetic operators perform mathematical computations, comparison operators compare values, and logical operators perform Boolean operations.
                They are essential for calculations, comparisons, and decision-making.`,
        code: `int sum = a + b;
                bool isEqual = (a == b);
                `,
      },
      {
        title: "Conditionals:",
        info: `Conditionals enable different code paths based on the evaluation of conditions.
                if statements execute a block of code if a given condition is true.
                else statements provide an alternative block of code to execute if the if condition is false.
                switch statements allow branching based on the value of an expression.`,
        code: `if (num > 10) {
                    // Code to execute if num is greater than 10
                } else {
                    // Code to execute if num is not greater than 10
                }
                
                `,
      },
    ],
  },
  opp: {
    topicName: "oop",
    details: "Object-Oriented Programming (OOP) is a programming paradigm that is widely used in C++ and many other programming languages. It focuses on structuring code in terms of objects, which are instances of classes.Object-Oriented Programming enhances code organization, reusability, and maintainability by representing real-world relationships and entities in a more intuitive manner. Here's an explanation of key OOP concepts in C++:",
    examples: [
      {
        title: "Class:",
        info: `A class is a blueprint or template for creating objects.
        It defines the attributes (data members) and behaviors (member functions or methods) that the objects of the class will have.`,
        code: ``,
      },
      {
        title: "Object:",
        info: `An object is an instance of a class. It represents a real-world entity and encapsulates data and methods related to that entity.`,
        code: ``,
      },
      {
        title: "Encapsulation:",
        info: `Encapsulation is the concept of bundling data and methods that operate on the data within a single unit, which is the class.
        Access to the data and methods is controlled through access specifiers like public, private, and protected`,
        code: ``,
      },
      {
        title: "Inheritance:",
        info: `Inheritance allows a new class (subclass or derived class) to inherit properties and behaviors from an existing class (base class or parent class).
        It promotes code reuse and supports creating specialized classes based on more general ones.`,
        code: ``,
      },
      {
        title: "Polymorphism:",
        info: `Polymorphism enables objects of different classes to be treated as objects of a common base class.
        It allows for flexibility and extensibility in the code by providing different implementations for the same method in different classes.`,
        code: `for (int i = 0; i < 5; i++) {
                    // Code to repeat
                }
                `,
      },
    ],
  },
};

const getTopics = (name) => {

    let res = <p className="text-center font-bold text-green-400 text-2xl">Nothig on this Page</p>;
console.log(name)
    if(name === "basics"){
        res =  (
            <div>
              <h1 className=" text-2xl font-bold underline underline-offset-2">
                {TOPICS_DATA.basics.topicName.toUpperCase()}
              </h1>
              <p className=" text-lg p-2 text-left">{TOPICS_DATA.basics.details}</p>
    
              {TOPICS_DATA.basics.examples.map((example) => {
                return (
                  <div key={example.title} className="mt-8">
                    <p className="mt-1 text-xl text-green-400 ">{example.title}</p>
                    <p className="mt-4 ">{example.info}</p>
                    <p className="mt-4 ">{example.code}</p>
                  </div>
                );
              })}
            </div>
          )
    }
    else if(name === "opp"){
        res =       (
            <div>
                {/* {console.log(name)} */}
              <h1 className=" text-2xl font-bold underline underline-offset-2">
                {TOPICS_DATA.opp.topicName.toUpperCase()}
              </h1>
              <p className=" text-lg p-2 text-left">{TOPICS_DATA.opp.details}</p>
    
              {TOPICS_DATA.opp.examples.map((example) => {
                return (
                  <div key={example.title} className="mt-8">
                    <p className="mt-1 text-xl text-green-400 ">{example.title}</p>
                    <p className="mt-4 ">{example.info}</p>
                    <p className="mt-4 ">{example.code}</p>
                  </div>
                );
              })}
            </div>
          )
    }

    return res;

}

const TopicPage = () => {
  const params = useSearchParams();
  const name = params.get("name");

  return (
    <div className=" rounded text-white p-2 text-left mt-14 mr-14">
        {/* Bascis */}
        {getTopics(name)}
        {/* OOP */}
    </div>
  );
};

export default TopicPage;

// ``` cpp

// #include <iostream>
// using namespace std;

// int main() {
//     // Integer
//     int age = 25;

//     // Floating-point
//     float pi = 3.14159;

//     // Character
//     char grade = 'A';

//     // Boolean
//     bool isTrue = true;

//     // Display variables
//     cout << "Age: " << age << ", Pi: " << pi << ", Grade: " << grade << ", isTrue: " << isTrue << endl;

//     return 0;
// }

// ```
