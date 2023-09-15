import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from "../components/Layout"
import PageProgress from "../components/PageProgress"

export default function Checkout() {

    return (
        <Layout>
            <PageProgress currentPage={6} totalPage={6} />
            <div className='w-full mt-[5vh] flex flex-col lg:flex-row justify-center items-center px-2 sm:px-10 text-primary mb-20 font-poppins'>
                <div className='flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-md py-5 px-10 mx-4 my-4'>
                    <h1 className='text-[28px] font-[500] font-josefin underline-offset-8 underline w-full text-left' style={{ outlineWidth: "20px" }}>Shipping Address</h1>
                    <div className='w-full flex flex-col items-center font-poppins mx-10 mt-2'>
                        <input type="text" className='w-full mx-2 py-3 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Full Name" />
                        <input type="text" className='w-full mx-2 py-3 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Email Address" />
                        <input type="text" className='w-full mx-2 py-3 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Street" />
                        <input type="text" className='w-full mx-2 py-3 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="City" />
                        <input type="text" className='w-full mx-2 py-3 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="State" />
                        <input type="text" className='w-full mx-2 py-3 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Country" />
                        <input type="text" className='w-full mx-2 py-3 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow-md border border-primary opacity-75' placeholder="Zip Code" />
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-md py-5 px-10 mx-4 my-4'>
                    <h1 className='text-xl font-[500] underline-offset-2 underline w-full text-left' style={{ outlineWidth: "20px" }}>Cart Total</h1>
                    <div className='w-full flex flex-col items-center font-poppins mx-10 mt-4'>
                        <div className='bg-[#FFF] rounded-md p-10 w-full'>
                            <div className='flex flex-row justify-between'>
                                <h2 className='font-bold text-2xl '>Product</h2>
                                <h2 className='font-bold text-2xl  text-right'>Total</h2>
                            </div>
                            <div className='flex flex-row justify-between my-4'>
                                <p className=''>Lorem Ipsum dolor x 1</p>
                                <p className=' text-right'>$15.30</p>
                            </div>
                            <hr className='border-primary opacity-60' />
                            <div className='flex flex-row justify-between my-4'>
                                <p className=' font-bold'>Sub Total</p>
                                <p className=' font-bold text-right'>$15.30</p>
                            </div>
                            <hr className='border-primary opacity-60' />
                            <div className='flex flex-row justify-between my-4'>
                                <p className=' font-bold'>Shipping Fee</p>
                                <p className=' font-bold text-right'>$00.00</p>
                            </div>
                            <hr className='border-primary opacity-60' />
                            <div className='flex flex-row justify-between mt-4'>
                                <h2 className='font-bold text-3xl '>Grand Total</h2>
                                <h2 className='font-bold text-3xl  text-right'>$15.30</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-end mt-4'>
                        <button className='hover:border-white font-poppins hover:bg-white hover:text-primary transition-colors cursor-pointer block px-10 py-2 rounded-lg text-white text-lg bg-primary shadow-md border border-primary opacity-70'>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
