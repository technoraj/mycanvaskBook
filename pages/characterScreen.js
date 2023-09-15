import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/Layout"
import PageProgress from "../components/PageProgress"

export default function CharacterScreen() {
  return (
    <Layout>
        <PageProgress currentPage={1} totalPage={6} />
        <div className='w-full sm:mt-[5vh] flex flex-col justify-center items-start px-4 sm:px-10 text-primary'>
          <div className='flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-md p-10'>
            <h1 className='text-[28px] font-[500] font-josefin underline-offset-8 underline' style={{outlineWidth: "20px"}}>Select Your Character</h1>
            <div className='w-full font-poppins mx-10'>
              <div className='w-full flex items-center justify-center'>
                <img className='w-[130px]' src="/character.png" />
              </div>
              <Link href={'/readerInfo'}>
                <button className='hover:border-white hover:bg-white hover:text-primary transition-colors cursor-pointer block w-full py-2 my-2 rounded-lg text-center text-white text-md sm:text-lg bg-primary shadow-md border border-primary opacity-70'>
                    Generate Character
                </button>
              </Link>
              <div className='my-2 flex flex-row items-center justify-center px-20'>
                <div className='h-0.5 w-full bg-primary'></div>
                <h2 className='mx-2 text-xl'>Or</h2>
                <div className='h-0.5 w-full bg-primary'></div>
              </div>
              <Link href={'/readerInfo'}>
                <button className='hover:border-white hover:bg-white hover:text-primary transition-colors cursor-pointer block w-full py-2 my-2 rounded-lg text-center text-white text-md sm:text-lg bg-primary shadow-md border border-primary opacity-70'>
                    Generate a random Character
                </button>
              </Link>
            </div>
          </div>
        </div>
    </Layout>
  )
}
