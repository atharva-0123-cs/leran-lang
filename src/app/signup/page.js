"use client";

import Link from "next/link";
import supabase from "../../../supabase";
import { useRouter } from "next/navigation";



const SingUp = () => {

    const router = useRouter();
    // router.push("/learn")


    const signUp =  (e) => {

        e.preventDefault();
    
        const data = {
            name : e.target.text?.value,
            email : e.target.email?.value,
            password : e.target.password?.value,
        }
    
      supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
        router.push('/learn');
    
      
    //   const { data : user, error } = await supabase
    //   .from('users')
    //   .insert([
    //     { name: data.name, email: data.email },
    //   ])
    //   .select()
    
    //   if(user){
    //     router.push('/learn');
    //   }
    //   else{
    //     console.log(error);
    //   }
    
    };


  return (
    <div className="flex justify-end mt-14 max-w-2xl mx-auto ">
      <div className="text-green-400 bg-slate-900 p-4 rounded-2xl ">
        <h1 className="text-2xl text-center">SIGNUP</h1>
        <form onSubmit={signUp} className="flex flex-col m-2 py-4">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            name="text"
            className="text-green-300 bg-slate-700 rounded p-2 mb-4 outline-none "
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="text-green-300 bg-slate-700 rounded p-2 mb-4 outline-none "
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="text-green-300 bg-slate-700 rounded p-2 mb-4 outline-none"
          />
          <button
          type="submit"
          className="bg-slate-700 rounded p-2 px-14 mx-auto my-5 hover:bg-green-500 hover:text-white">
            SingUp
          </button>
          <p className="text-green-100 px-14 mx-auto">
            Already have a account{" "}
            <span>
              <Link
                href="/"
                className="text-green-400 hover:underline underline-offset-2 transition duration-100 ease-in-out"
              >
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
