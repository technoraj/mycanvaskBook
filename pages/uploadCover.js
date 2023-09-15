import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/Layout"
import PageProgress from "../components/PageProgress"

export default function UploadCover() {
    return (
        <Layout>
            <PageProgress currentPage={5} totalPage={6} />
            <div className='w-full sm:mt-[5vh] flex flex-col justify-center items-center px-4 text-primary mb-10'>
                <div className='flex flex-col items-center justify-center'>

                    <input type="text" className='w-full mx-2 py-4 my-2 rounded-lg px-4 placeholder:text-primary bg-[#FFF] shadow border border-primary text-center text-lg' placeholder="Book Title" />
                    <div className='my-2 rounded-md overflow-hidden shadow'>
                        <img src="/preview.png" className='w-[450px]' />
                    </div>
                    <div className='w-full font-poppins mx-10'>
                        <button className='hover:border-primary hover:bg-white hover:text-primary transition-colors cursor-pointer block w-full py-2 my-2 rounded-lg text-center text-white text-md sm:text-lg bg-primary shadow-md border border-primary'>
                            Generate Book Cover
                        </button>
                        <div className='flex flex-row items-center my-1'>
                            <button className='border border-primary p-3 rounded-lg bg-white shadow mr-1 hover:opacity-75'>
                                <img src="/icons/download.svg" className='w-5 h-5' />
                            </button>
                            <button className='flex-grow hover:bg-primary hover:text-white transition-colors cursor-pointer block w-full py-2 rounded-lg text-center text-primary text-md sm:text-lg bg-white shadow-md border border-primary ml-1'>
                                <Link href="/checkout">
                                    Submit and Order
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
