import React from 'react'
export default function Navbar(){
    return(
        <div>
            <nav className='bg-[#1A0B2E] flex justify-between px-[15em] items-center py-[1.5em]'>
                <img src="src/assets/images/Logo.png" alt="" className='h-[1.5em]'/>
                <ul className='flex gap-[5em] text-white'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Lab</li>
                </ul>
            </nav>
        </div>
    );
}