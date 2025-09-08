import React from 'react'

export default function Projects2() {
    return (
        <div className='flex bg-[background: rgba(17,7,31,1);
] relative mt-50 pl-[15em]'>
            <div className='bg-[#2b0b3a] pr-8 rounded-md pt-8'>
                <img className='' src="src/assets/images/Screenshot2.png" alt="" />
                <div>
                    <h4 className='text-[#9857D3]'>Featured  Project</h4>
                    <h5 className='text-white text-[30px]'>Example Projects</h5>
                </div>
            </div>
            <div className="z-10 absolute">
                <div className=" text-[18px] p-5 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-lg flex items-center justify-center mt-[2em]">
                    <p className='text-white'> A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and moriiiiie.</p>
                </div>

                <div className='flex gap-[1em] mt-[2em]'>
                    <img src="src/assets/images/icon-park-solid_click (1).png" alt="" />
                    <img src="src/assets/images/icon-park-solid_click (1).png" alt="" />
                </div>
            </div>
        </div>
    )
}
