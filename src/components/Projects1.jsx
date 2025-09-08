import React from 'react'

export default function Project () {
    return (
        <div className='pl-[15em] flex relative pt-36 bg-[rgb(17,7,31)]'>
            <div>
                <h4 className='text-[#9857D3]'>Featured  Project</h4>
                <h5 className='text-white text-[30px]'>Example Project</h5>

                <div className="relative z-10">
                    <div className="max-w-[45%] text-[18px] p-5 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-lg flex items-center justify-center mt-[2em]">
                        <p className='text-white'> A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.</p>
                    </div>
                </div>
                
                <div className='flex gap-[1em] mt-[2em]'>
                    <img src="src/assets/images/icon-park-solid_click (1).png" alt="" />
                    <img src="src/assets/images/icon-park-solid_click (1).png" alt="" />
                </div>
            </div>
            <div className='bg-[#2b0b3a] pl-8 pt-8 absolute right-[200px] rounded-md'>
                <img className='' src="src/assets/images/Screenshot.png" alt="" />
            </div>
        </div>
    )
}
