import Link from "next/link";
import { useEffect, useState } from "react";
import RichTextEditor from 'react-rte';

const EditModal = ({ modalVisible, setModalVisible }) => {
    const [text, setText] = useState([])

    useEffect(() => {
        setText(RichTextEditor.createEmptyValue())
    }, [])

    const onTextChange = (value) => {
        setText(value);
    }

    if (modalVisible) {
        return (
            <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10 bg-black/70'>
                <div className="w-full max-w-[380px] sm:max-w-3xl">
                    <div className='bg-white w-full rounded-xl'>
                        <div className='w-full'>
                            <RichTextEditor
                                className="min-h-[50vh]"
                                value={text}
                                onChange={onTextChange}
                            />
                        </div>
                    </div>

                    <div className='flex flex-row justify-end w-full font-roboto py-2'>
                        <button onClick={() => setModalVisible(false)} className='hover:border-primary hover:bg-white hover:text-primary transition-colors cursor-pointer py-2 rounded-lg text-center text-white text-md sm:text-lg bg-primary shadow-md border border-primary w-fit px-10 flex flex-row items-center'>
                            <img className='mx-2' src="/icons/save.svg" /> Save
                        </button>
                    </div>
                </div>
            </div>
        )
    } else return <></>
}

export default EditModal;