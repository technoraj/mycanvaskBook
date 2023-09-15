import Link from "next/link";

const Navbar = (props) => {
    return (
        <nav className="p-2 px-10 w-full bg-primary flex flex-row items-center justify-between font-workSans shadow-lg">
            <div>
                <img className="h-16 pl-4" src="/logo.png" />
            </div>
            <div className="flex flex-row items-center text-white">
                <Link href="/">
                    <p className="mx-3 hover:text-textWhite">Home</p>
                </Link>
                <Link href="/">
                    <p className="mx-3 hover:text-textWhite">Our Books</p>
                </Link>
                <Link href="/">
                    <p className="mx-3 hover:text-textWhite">Blog</p>
                </Link>
                <Link href="/">
                    <p className="mx-3 hover:text-textWhite">About Us</p>
                </Link>
                <Link href="/">
                    <p className="mx-3 hover:text-textWhite">Contact Us</p>
                </Link>
            </div>
            <div className="flex flex-row mx-2">
                <Link href="/" className="mx-3">
                    <img src="/icons/search.svg" className="w-5 h-5 hover:opacity-70" />
                </Link>
                <Link href="/" className="mx-3">
                    <img src="/icons/user.svg" className="w-5 h-5 hover:opacity-70" />
                </Link>
                <Link href="/" className="mx-3">
                    <img src="/icons/cart.svg" className="w-5 h-5 hover:opacity-70" />
                </Link>
                <Link href="/" className="mx-3">
                    <img src="/icons/heart.svg" className="w-5 h-5 hover:opacity-70" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;