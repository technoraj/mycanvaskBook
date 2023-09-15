import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import GenerateImage from '../components/GenerateImage';
import Layout from "../components/Layout"
import PageProgress from "../components/PageProgress"

export default function ImageGeneration() {
    return (
        <Layout>
            <PageProgress currentPage={4} totalPage={6} />
            <div className='w-full mt-[5vh] px-4 sm:px-20 flex flex-col justify-center items-center text-primary'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='relative bg-[#FFF] rounded-lg overflow-hidden font-poppin w-full shadow border-2 border-primary'>
                        <textarea rows={5} className='relative p-6 w-full placeholder:text-primary text-lg bg-[#FFF] focus:outline-none' placeholder="write a story ..." />
                        <div className='absolute right-0 bottom-0 p-5'>
                            <button className='rounded-full bg-primary p-2 flex items-center justify-center shadow-md hover:opacity-75'>
                                <img src='/icons/arrow.svg' />
                            </button>
                        </div>
                    </div>
                    <div className='relative my-2 mb-2 overflow-hidden font-poppin w-full flex items-center justify-center'>
                        <div className='w-full flex flex-row justify-center flex-wrap'>
                            <GenerateImage />
                            <GenerateImage />
                            <GenerateImage />
                            <GenerateImage />
                            <GenerateImage />
                            <GenerateImage />
                            <GenerateImage />
                            <GenerateImage />
                        </div>
                    </div>
                    <div className='w-full my-2 mb-10 flex flex-col sm:flex-row items-center justify-between'>
                        <div className='flex flex-row items-center'>
                            <button className='font-poppins my-2 hover:bg-primary/80 mx-2 transition-colors cursor-pointer px-14 py-2 rounded-lg text-white text-lg bg-primary shadow-md border border-primary flex flex-row items-center'>
                                <img className='mx-2' src="/icons/edit.svg" /> Edit
                            </button>

                            <button className='font-poppins my-2 hover:bg-primary/80 mx-2 transition-colors cursor-pointer px-14 py-2 rounded-lg text-white text-lg bg-primary shadow-md border border-primary flex flex-row items-center'>
                                <img className='mx-2' src="/icons/copy.svg" /> Copy
                            </button>
                        </div>
                        <div className='flex flex-row items-center my-2'>
                            <Link href="/uploadCover">
                                <button className='font-poppins hover:bg-primary/80 mx-2 transition-colors cursor-pointer px-14 py-2 rounded-lg text-white text-lg bg-primary shadow-md border border-primary flex flex-row items-center'>
                                    Next <img className='mx-2' src="/icons/arrow-2.svg" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
