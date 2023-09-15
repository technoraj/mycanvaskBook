import Link from "next/link";

const UploadModal = ({modalVisible, setModalVisible}) => {
    if (modalVisible){
        return (
            <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10 bg-black/70'>
                <div className='bg-white rounded-xl w-full max-w-[380px] sm:max-w-lg'>
                    <div className='w-full flex flex-row items-center justify-between px-6 pt-6'>
                        <h2 className='font-roboto text-xl text-[#5F5F5F] font-semibold'>Upload Image</h2>
                        <button onClick={() => setModalVisible(false)} className='hover:opacity-50'>
                            <img className='w-6 h-6' src="/icons/close.svg" />
                        </button>
                    </div>
                    <div className='m-6 border-primary border-2 rounded-lg border-dashed border-spacing-4 p-10 flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
    
                            <input className='hidden' type="file" id="picture" placeholder='Upload Picture' />
                            <label htmlFor='picture' className='font-roboto cursor-pointer hover:opacity-75 text-[#6D6D6D] font-bold mt-1 flex flex-col items-center justify-center'>
                                <img src="/icons/upload.svg" className='w-9 h-9' />
                                Select Image to Upload
                            </label>
                            <p className='font-roboto text-[#747474] text-sm'>or drag and drop it here</p>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex flex-row justify-end w-full my-2 font-roboto py-2'>
                        <div className='flex flex-row mx-4'>
                            <button onClick={() => setModalVisible(false)} className='hover:bg-primary hover:text-white transition-colors cursor-pointer block w-full py-2 px-6 mx-2 rounded-lg text-primary bg-white border border-[#E8E8E8]'>
                                Discard
                            </button>
                            <button className='hover:bg-white hover:text-primary transition-colors cursor-pointer block w-full py-2 px-6 mx-2 rounded-lg text-white bg-primary border border-[#E8E8E8]'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else return <></>
}

export default UploadModal;