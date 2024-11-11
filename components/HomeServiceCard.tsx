import Image from 'next/image'
import React from 'react'
import RightArrowIcon from '../data/icon/RightArrowIcon'

interface HProps{
  image:string
  title: string
  content: string
  btn: string
}

const HomeServiceCard = ({image, title, content, btn}:HProps) => {
  return (
      <div className='shadow-[-1px_-1px_4px_0px_#00000040] rounded-[10px]'>
        <Image src={image} alt={image} height={525} width={525}/>
        <div className='px-7'>
        <h2 className='pb-8 text-black font-[500] mt-[-39px]'>{title}</h2>
        <p className='pb-[18px] text-[20px] font-[400] leading-[normal]'>{content}</p>
        <button className='text-[20px] font-[400] pb-12 flex items-center gap-3'>{btn}<RightArrowIcon/></button>
        </div>
      </div>
  )
}

export default HomeServiceCard
