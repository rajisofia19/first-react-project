import React from 'react'

export default function Hero() {
    return (
        <div className='flex gap-[40px] items-center pl-[15em] pt-[100px]'>
            <div className='relative'>
                <img src="src/assets/images/Arrow.png" alt="arrow" className='absolute inset-y-0 -top-[80px] left-[100px] animate-bounce' />
                <span className='text-white absolute -top-[55px] left-[210px] whitespace-nowrap'>Hello, I am <span className='text-[#7127BA]'>Sofia Raji</span> </span>
                <div className='relative'>
                    <div className='bg-[rgba(118,60,172,1)] blur-xl drop-shadow-2xl h-[280px] w-[150px] rounded-full absolute left-[20px] shadow-2xl '></div>
                    <img src="src/assets/images/me.png" alt="my-image" className='h-[250px] relative z-[10px] animate-bounce' />
                </div>
            </div>
            <div className='text-white'>
                <p>A Designer who <span className='text-[40px] block max-w-[260px] leading-[45px]'>judges a book by its <span className='text-[#7127BA] border-white border rounded-full px-[10px]'>cover...</span> </span> <span className='block text-[10px] pt-[5px]'>because if the cover does not impress you what else can?</span></p>
            </div>
        </div>
    )
}
