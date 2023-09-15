import Link from "next/link";
import { useEffect, useState } from "react";

const PageProgress = ({ currentPage, totalPage }) => {

    const [pos, setPos] = useState(0);

    useEffect(() => {
        function handleResize() {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
            let progress_width = document.querySelector('.page-progress').scrollWidth;

            setPos(((progress_width/totalPage) * currentPage) - 20)
        }

        window.addEventListener('resize', handleResize);
        handleResize();
    }, [])

    return (
        <div className="w-full my-10 flex flex-row items-center justify-center">
            <div className="page-progress w-full flex flex-row items-center max-w-xs lg:max-w-xl sm:max-w-md relative">
                <div className="h-2 bg-white w-full rounded-full border shadow">
                </div>
                <div className="absolute border rounded-full" style={{ left: pos }}>
                    <div className="w-[18px] h-[18px] border-[4px] border-white rounded-full bg-primary"></div>
                </div>
            </div>
        </div>
    )
}

export default PageProgress;