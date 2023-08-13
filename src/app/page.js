'use client'
import React from 'react';
import supabase from '../../supabase';
import Login from '../components/Login';




export default function Home() {
  return (
    <div className='flex justify-end mt-14 max-w-2xl mx-auto '>

      {/* Login and Sgin */}
      <Login/>
      



    </div>

  )
}
