import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from "../components/Layout"
import PageProgress from "../components/PageProgress"
import UploadModal from '../components/UploadModal';

export default function Home() {
  const [isUploadScreen, setIsUploadScreen] = useState(false);

  return (
    <Layout>

      <UploadModal modalVisible={isUploadScreen} setModalVisible={setIsUploadScreen} />

      <PageProgress currentPage={0} totalPage={6} />
      <div className='w-full mt-[10vh] flex flex-col justify-center items-start px-4 sm:px-10 text-primary'>
        <div className='max-w-full flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm rounded-md p-10'>
          <h1 className='text-[28px] font-[500] font-josefin'>Create Your Character</h1>
          <div className='w-full font-poppins mx-10'>
            <input type="text" className='w-full py-2 my-2 rounded-lg text-center placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder='Character Name' />
            <div className='w-full flex flex-row'>
              <input type="number" min="1" max="100" className='flex-grow py-2 rounded-lg text-center placeholder:text-primary text-lg bg-[#FFF] shadow-md border border-primary opacity-75' placeholder='Age' />
              <div className='flex flex-row items-center justify-evenly flex-grow-[3] border border-primary opacity-75 bg-[#FFF] rounded-lg ml-2'>
                <div className='mx-2 flex flex-row items-center'>
                  <input id="gender-male" name='gender' className='outline-primary' type="radio" />
                  <label className='mx-2' htmlFor='gender-male'>Male</label>
                </div>
                <div className='mx-2 flex flex-row items-center'>
                  <input id="gender-female" name='gender' className='outline-primary' type="radio" />
                  <label className='mx-2' htmlFor='gender-female'>Female</label>
                </div>
              </div>
            </div>
            <button onClick={() => setIsUploadScreen(true)} className='hover:border-primary hover:bg-primary hover:text-white transition-colors cursor-pointer block w-full py-2 my-2 rounded-lg text-center text-lg bg-[#FFF] shadow-md border border-primary opacity-75'>
              Upload Picture
            </button>
            <Link href={"/characterScreen"}>
              <button className='hover:border-white hover:bg-white hover:text-primary transition-colors cursor-pointer block w-full py-2 my-2 rounded-lg text-center text-white text-lg bg-primary shadow-md border border-primary opacity-75'>
                Generate Character
              </button>
            </Link>
            <div className='my-2 flex flex-row items-center justify-center px-20'>
              <div className='h-0.5 w-full bg-primary'></div>
              <h2 className='mx-2 text-xl'>Or</h2>
              <div className='h-0.5 w-full bg-primary'></div>
            </div>
            <Link href={"/characterScreen"}>
              <button className='hover:border-white hover:bg-white hover:text-primary transition-colors cursor-pointer block w-full py-2 my-2 rounded-lg text-center text-white text-lg bg-primary shadow-md border border-primary opacity-75'>
                Generate a random Character
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
