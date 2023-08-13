"use client";

import { usePathname } from "next/navigation";
import TopicCard from "@/app/components/TopicCard";

const TOPICS = [
  {
    id: "basics",
    title: "Basics",
    info: "Basics of C++, including data types, constants, variables, arrays, pointers, references, loops, operators, and conditionals.",
   
  },
  {
    id: "opp",
    title: "OOP",
    info : "C++ supports object-oriented programming, which enables developers to organize their code.",
   
  },
  {
    id: "cando",
    title: "Classes and Objects",
    info : "In C++, you can define classes, which are user-defined data types that encapsulate both data (attributes or member variables) and functions (methods).",
   
  },
  {
    id: "inheritance",
    title: "Inheritance",
    info : " C++ supports inheritance, a mechanism where a new class (subclass or derived class) can inherit properties and behaviors from an existing class (base class or parent class).",
  
  },
  {
    id: "polymorphism",
    title: "Polymorphism",
    info : " Polymorphism allows objects of different classes to be treated as objects of a common base class, simplifying the design of flexible and extensible systems.",
  
  },
  {
    id: "stl",
    title: "STL",
    info : "The STL is a collection of pre-defined classes and functions that provide common data structures (like vectors, lists, and maps) and algorithms (sorting, searching, etc.).",
    
  },
  {
    id: "templates",
    title: "Templates",
    info : " C++ introduced templates, which enable the creation of generic classes and functions that can work with various data types.",
  
  },
  {
    id: "memory",
    title: "Memory Management",
    info : " C++ offers manual memory management through features like pointers and dynamic memory allocation with new and delete.",
    
  },
  {
    id: "withC",
    title: "Compatibility with C",
    info : "C++ is designed to be compatible with C, which means you can often use C code within a C++ program. This is helpful when interfacing with existing C libraries.",
  
  },
];

const CppPage = () => {
  const pathname = usePathname();

  // console.log(pathname);

  return (
    <div className="mt-16">
      <h1 className="bg-green-400 text-cyan-100 p-2  max-w-xs  text-center font-bold rounded-lg">
        C++ 
      </h1>
      <p className="max-w-3xl mt-4 text-green-50 text-lg">
        C++ is a versatile and powerful programming language that combines
        features from the C programming language and introduces several
        additional features for easier and more organized development of complex
        software systems. It is widely used for developing a variety of
        applications, ranging from operating systems, games, and desktop
        applications to embedded systems and high-performance software.
      </p>
      <p className="max-w-3xl mt-4 text-green-200 text-lg">
        Here are some key aspects and features of C++:
      </p>
      <div className="grid grid-cols-2 gap-2 ">
        {TOPICS.map((topic) => 
            <TopicCard
                key={topic.id}
                topic={topic}
                langName={pathname}
                className=" col-span-1 "
            />
        )}
      </div>
    </div>
  );
};

export default CppPage;
