import React from 'react'
// images
import Image1 from '../assets/images/Group1.png'
import Image2 from '../assets/images/Group2.png'
import Image3 from '../assets/images/Group3.png'
import Image4 from '../assets/images/Group4.png'

function Mypictures(props) {


  return (


    <div className=''>
      <div className='text-white flex gap-[25px] bg-[#2C1250] blur-[#0000001F] drop-shadow-[box-shadow: 4px,7px,26px,0px #0000001F] items-center py-[1em] px-[1em] rounded-[10px]'>
        <img src={props.image} alt="" />
        <div>
          <h2 className='text-[2em]'>{props.title}</h2>
          <p className='max-w-[74%] text-[10px]'>{props.subtext}
          </p>
          <button className='mt-[1em] text-[10px] border-[1px] border-[#693B93] bg-[#2C1250] py-[8px] px-[10px] rounded-[10px]'>{props.btn}</button>
        </div>
      </div>
    </div>

  )
}


export default function Cards() {
  return (
    <div className='grid grid-cols-2 gap-10 mx-[15em]'>
      <Mypictures image={Image1} title='CIB on the Mobile' subtext='Take your client onboard seamlessly by our amazing
           tool of digital onboard process.' btn='LEARN MORE' />
      <Mypictures image={Image2} title='CIB on the Mobile' subtext='Take your client onboard seamlessly by our amazing
           tool of digital onboard process.' btn='LEARN MORE' />
      <Mypictures image={Image3} title='CIB on the Mobile' subtext='Take your client onboard seamlessly by our amazing
           tool of digital onboard process.' btn='LEARN MORE' />
      <Mypictures image={Image4} title='CIB on the Mobile' subtext='Take your client onboard seamlessly by our amazing
           tool of digital onboard process.' btn='LEARN MORE' />
    </div>
  )
}
