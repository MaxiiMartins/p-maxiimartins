import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import  Link  from 'next/link';

const LandingPage = () => {

    const [subtitle] = useTypewriter({
        words: ["Bienvenido a"],
        loop: 1
    });
    const [title] = useTypewriter({
        words: ["mi portafolio web"],
        loop: 1
    });



    return (
        <div className='text-center flex flex-col justify-center items-center h-screen w-full text-white uppercase font-bold'
            style={{
                fontFamily: "Big Shoulders Display",
                letterSpacing: " 0.075em",
                background: "linear-gradient(90deg, rgba(232, 74, 74, 0) 0%, rgba(232, 74, 74, 0.17) 51.94%, rgba(232, 74, 74, 0) 100%)"
            }}
        //   border: 1px solid rgba(255, 255, 255, 0.13);

        >
            <div className='text-5xl' >
                <h1>{subtitle}</h1>
            </div>
            <div className='text-7xl font-extrabold my-5' >
                {title}
            </div>
            <div className='flex flex-col text-2xl gap-6' >
                <Link href={"/prueba"}>
                    <span className='border-4 border-[#E84A4A] text-[#E84A4A] min-w-[200px] animate-pulse hover:animate-none hover:text-black hover:bg-[#E84A4A] py-3 px-8 transition-colors duration-300 ease-linear cursor-pointer' >Explorar</span>
                </Link>
                <p className='text-xl text-white/60 animate-pulse' > haga clic en <b className='text-white' > Explorar </b></p>
            </div>
        </div>
    )
}

export default LandingPage