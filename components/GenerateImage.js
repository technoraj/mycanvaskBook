import Head from 'next/head';
import Navbar from './Navbar';

const GenerateImage = ({ }) => {
    return (
        <div className='m-1 relative'>
            <img className='w-[300px]' src="/sample.png" />
            <div className='absolute left-0 top-0 p-4'>
                <input className='scale-150' type="checkbox" />
            </div>
        </div>
    )
}

export default GenerateImage;