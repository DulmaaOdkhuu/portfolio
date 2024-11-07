import Link from 'next/link'
export default function Navbar() {
    return (
        <>
        <header className='header'>
           <Link className='w-15 p-2 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md z-20' href="/"><p className='blue-gradient_text'>Home</p></Link>
        <div className='flex text-sm lg:text-lg gap-7 items-center justify-end p-2 font-medium z-10 w-full text-white '>
         <Link className=" inline-block bg-clip-text" href="/about">About</Link>
         <Link className=" inline-block bg-clip-text" href="/projects">Projects</Link>
         <Link className=" inline-block bg-clip-text text-white" href="/experience">3D Experience</Link>
         </div>
         </header>
        </>
    )
}