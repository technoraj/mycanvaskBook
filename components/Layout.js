import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className="">
      <Head>
        <title>My Story Canvas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overflow-x-hidden min-h-screen bg-cover bg-center relative' style={{backgroundImage: "url('/bg.png')"}}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default Layout;