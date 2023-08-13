'use client'
import Link from 'next/link';
import {BsArrowRightCircleFill} from 'react-icons/bs';
import '@/app/globals.css'

const LangCart = ({title,detail,link}) => {
  return (
    <div className="max-w-3xl bg-slate-600 p-5 rounded">
      <h1 className="text-3xl text-green-400">{title}</h1>
      <p className="text-md text-white">
       {detail}
      </p>
      <Link href={link} className=' bg-reg-400 flex gap-2 items-center mt-4 cursor-pointer text-green-200 hover:underline underline-offset-2 hover:text-green-500'><BsArrowRightCircleFill/> show more </Link>
    </div>
  );
};

export default LangCart;
