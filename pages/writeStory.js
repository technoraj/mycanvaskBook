import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from "../components/Layout"
import PageProgress from "../components/PageProgress"
import EditModal from '../components/EditModal';

export default function WriteStory() {
    const [isEdit, setIsEdit] = useState(false);
    return (
        <Layout>
            <EditModal modalVisible={isEdit} setModalVisible={setIsEdit} />
            <PageProgress currentPage={3} totalPage={6} />
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
                    <div className='relative my-4 mb-2 bg-[#FFF] rounded-lg overflow-hidden font-poppin w-full shadow border-2 border-primary p-4'>
                        <div className='w-full mx-2'>
                            <div className='flex flex-row items-center'>
                                <img src='/icons/layers.svg' className='w-5 h-5' />
                                <h2 className='mx-2 font-bold font-poppins text-xl'>Samples</h2>
                            </div>
                        </div>
                        <hr className='mx-2 my-2 border-primary opacity-40' />
                        <div className='max-h-[50vh] overflow-y-auto'>
                            <div className='text-[16px] mx-3 my-2'>
                                <p>
                                    <strong>Lost in the Enchanted Garden:</strong> "Imagine a delightful story about a young girl named [Name], aged [Age], who stumbles upon a secret entrance to an enchanted garden. Describe her whimsical encounters with magical creatures, captivating flowers, and hidden treasures. Let the story unfold with unexpected friendships, lessons about nature, and the power of imagination."
                                </p>
                            </div>
                            <hr className='mx-2 my-2 border-primary opacity-40' />
                            <div className='text-[16px] mx-3 my-2'>
                                <p>
                                    <strong>Lost in the Enchanted Garden:</strong> "Imagine a delightful story about a young girl named [Name], aged [Age], who stumbles upon a secret entrance to an enchanted garden. Describe her whimsical encounters with magical creatures, captivating flowers, and hidden treasures. Let the story unfold with unexpected friendships, lessons about nature, and the power of imagination."
                                </p>
                            </div>
                            <hr className='mx-2 my-2 border-primary opacity-40' />
                            <div className='text-[16px] mx-3 my-2'>
                                <p>
                                    <strong>Lost in the Enchanted Garden:</strong> "Imagine a delightful story about a young girl named [Name], aged [Age], who stumbles upon a secret entrance to an enchanted garden. Describe her whimsical encounters with magical creatures, captivating flowers, and hidden treasures. Let the story unfold with unexpected friendships, lessons about nature, and the power of imagination."
                                </p>
                            </div>
                            <hr className='mx-2 my-2 border-primary opacity-40' />
                            <div className='text-[16px] mx-3 my-2'>
                                <p>
                                    <strong>Lost in the Enchanted Garden:</strong> "Imagine a delightful story about a young girl named [Name], aged [Age], who stumbles upon a secret entrance to an enchanted garden. Describe her whimsical encounters with magical creatures, captivating flowers, and hidden treasures. Let the story unfold with unexpected friendships, lessons about nature, and the power of imagination."
                                </p>
                            </div>
                            <hr className='mx-2 my-2 border-primary opacity-40' />
                            <div className='text-[16px] mx-3 my-2'>
                                <p>
                                    <strong>Lost in the Enchanted Garden:</strong> "Imagine a delightful story about a young girl named [Name], aged [Age], who stumbles upon a secret entrance to an enchanted garden. Describe her whimsical encounters with magical creatures, captivating flowers, and hidden treasures. Let the story unfold with unexpected friendships, lessons about nature, and the power of imagination."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2 mb-10 flex flex-col sm:flex-row items-center justify-between'>
                        <div className='flex flex-row items-center'>
                            <button onClick={() => setIsEdit(true)} className='font-poppins my-2 hover:bg-primary/80 mx-2 transition-colors cursor-pointer px-14 py-2 rounded-lg text-white text-lg bg-primary shadow-md border border-primary flex flex-row items-center'>
                                <img className='mx-2' src="/icons/edit.svg" /> Edit
                            </button>

                            <button className='font-poppins my-2 hover:bg-primary/80 mx-2 transition-colors cursor-pointer px-14 py-2 rounded-lg text-white text-lg bg-primary shadow-md border border-primary flex flex-row items-center'>
                                <img className='mx-2' src="/icons/copy.svg" /> Copy
                            </button>
                        </div>
                        <div className='flex flex-row items-center my-2'>
                            <Link href="/imageGeneration">
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
