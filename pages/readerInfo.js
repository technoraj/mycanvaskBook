import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from "../components/Layout"
import PageProgress from "../components/PageProgress"

export default function ReaderInfo() {

  return (
    <Layout>
      <PageProgress currentPage={2} totalPage={6} />
      <div className='w-full mt-[5vh] flex flex-col justify-center items-center px-10 text-primary mb-20'>
        <div className='flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-md pt-10 px-10 pb-5'>
          <h1 className='text-[28px] font-[500] font-josefin underline-offset-8 underline' style={{ outlineWidth: "20px" }}>Reader's Information</h1>
          <div className='w-full font-poppins mx-10 mt-2'>
            <div className='w-full flex flex-col items-center justify-center'>

              <div className='w-full flex flex-col sm:flex-row items-center'>
                <input type="text" className='w-full mx-2 py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Reader's Name" />

                <input type="text" className='w-full mx-2 py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Reader's Age" />
              </div>

              <div className='w-full flex flex-col sm:flex-row items-center'>
                <select className='select-wrapper w-full mx-2 py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75'>
                  <option value="" disabled selected>Theme</option>
                  <option>None</option>
                  <option>None</option>
                </select>
                <select className='select-wrapper w-full mx-2 py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75'>
                  <option value="" disabled selected>Reading Level</option>
                  <option>None</option>
                  <option>None</option>
                </select>
              </div>

              <div className='w-full flex flex-col sm:flex-row items-center'>
                <input type="text" className='w-full mx-2 py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Occasion/Event" />

                <input type="text" className='w-full mx-2 py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Reader's Interest/Hobbies" />
              </div>
            </div>

            <div className='w-full flex flex-col items-center sm:items-start justify-center sm:flex-row'>
              <div className='flex flex-col flex-grow h-max w-full mx-2'>
                <input type="text" className='w-full py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Favorite Color" />

                <input type="text" className='w-full py-2 my-2 rounded-lg px-4 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Reader's Personality" />
              </div>
              <textarea rows={3} sty className='w-full my-2 flex-grow mx-2 py-2 rounded-lg p-2 placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Additional Comments" />
            </div>
          </div>
          <div className='w-full flex flex-row justify-end my-2'>
            <Link href="/writeStory">
              <button className='hover:border-white font-poppins mx-2 hover:bg-white hover:text-primary transition-colors cursor-pointer block px-20 py-2 rounded-lg text-white text-lg bg-primary shadow-md border border-primary opacity-70'>
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout >
  )
}
